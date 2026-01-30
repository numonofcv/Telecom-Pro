import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Button,
    Stack,
    Chip,
    Dialog,
    DialogContent,
    IconButton,
    Divider
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    Calendar,
    User,
    ArrowRight,
    X,
    MessageCircle,
    Share2,
    ThumbsUp
} from 'lucide-react';

export const Blog = () => {
    const { t } = useTranslation(['blog', 'common']);
    const [selectedPost, setSelectedPost] = useState(null);
    const posts = t('blog:posts', { returnObjects: true });

    const postImages = {
        1: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
        2: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800",
        3: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    };

    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>{t('blog:title')}</Typography>
                <Typography color="text.secondary">{t('blog:subtitle')}</Typography>
            </Box>

            <Grid container spacing={4}>
                {posts.map((post) => (
                    <Grid item xs={12} md={4} key={post.id}>
                        <Card
                            onClick={() => setSelectedPost(post)}
                            sx={{
                                borderRadius: '40px',
                                height: '100%',
                                cursor: 'pointer',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease',
                                '&:hover': { transform: 'translateY(-10px)' }
                            }}
                        >
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="240" image={postImages[post.id]} />
                                <Chip
                                    label={post.category}
                                    sx={{ position: 'absolute', top: 20, left: 20, bgcolor: '#00E0FF', fontWeight: 800 }}
                                />
                            </Box>
                            <CardContent sx={{ p: 4 }}>
                                <Stack direction="row" spacing={2} sx={{ mb: 2, opacity: 0.6 }}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Calendar size={14} /> <Typography variant="caption" sx={{ fontWeight: 700 }}>{post.date}</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <User size={14} /> <Typography variant="caption" sx={{ fontWeight: 700 }}>Admin</Typography>
                                    </Stack>
                                </Stack>
                                <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>{post.title}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>{post.excerpt}</Typography>
                                <Button endIcon={<ArrowRight size={18} />} sx={{ color: '#0A1A3C', fontWeight: 800, px: 0 }}>{t('blog:readMore')}</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog
                open={Boolean(selectedPost)}
                onClose={() => setSelectedPost(null)}
                maxWidth="md"
                fullWidth
                PaperProps={{ sx: { borderRadius: '40px', overflow: 'hidden' } }}
            >
                {selectedPost && (
                    <DialogContent sx={{ p: 0 }}>
                        <Box sx={{ position: 'relative', height: 400 }}>
                            <img src={postImages[selectedPost.id]} alt={selectedPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <IconButton
                                onClick={() => setSelectedPost(null)}
                                sx={{ position: 'absolute', top: 20, right: 20, bgcolor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}
                            >
                                <X />
                            </IconButton>
                            <Box sx={{ position: 'absolute', bottom: 40, left: 40, color: 'white' }}>
                                <Chip label={selectedPost.category} sx={{ bgcolor: '#0057FF', color: 'white', mb: 2 }} />
                                <Typography variant="h3" sx={{ fontWeight: 900 }}>{selectedPost.title}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ p: 6 }}>
                            <Stack direction="row" spacing={4} sx={{ mb: 4, opacity: 0.6 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{selectedPost.date}</Typography>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{t('blog:by')} Admin</Typography>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{t('blog:comments', { count: 12 })}</Typography>
                            </Stack>
                            <Typography variant="h6" sx={{ lineHeight: 1.8, fontWeight: 400 }}>{selectedPost.content}</Typography>
                            <Divider sx={{ my: 4 }} />
                            <Stack direction="row" justifyContent="space-between">
                                <Stack direction="row" spacing={3}>
                                    <Button startIcon={<ThumbsUp size={18} />}>142</Button>
                                    <Button startIcon={<Share2 size={18} />}>{t('blog:share')}</Button>
                                </Stack>
                                <Button variant="contained" onClick={() => setSelectedPost(null)} sx={{ bgcolor: '#0A1A3C' }}>{t('blog:close')}</Button>
                            </Stack>
                        </Box>
                    </DialogContent>
                )}
            </Dialog>
        </Container>
    );
};

export default Blog;
