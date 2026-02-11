import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Star, ChevronRight, SlidersHorizontal, Grid3X3, List,
    Monitor, Speaker, Home, Cable, X
} from 'lucide-react';
import { products, categories, formatPrice, type Product } from '../data/products';

const categoryIcons: Record<string, React.ElementType> = {
    projectors: Monitor,
    speakers: Speaker,
    'home-theater': Home,
    accessories: Cable,
};

interface ProductListingPageProps {
    category?: string;
    onNavigate: (path: string) => void;
}

export function ProductListingPage({ category, onNavigate }: ProductListingPageProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>(category || 'all');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500000]);
    const [compareList, setCompareList] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<string>('featured');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const filteredProducts = useMemo(() => {
        let filtered = products.filter((p) => {
            const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
            const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
            return matchCategory && matchPrice;
        });

        switch (sortBy) {
            case 'price-low':
                filtered = [...filtered].sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered = [...filtered].sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered = [...filtered].sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        return filtered;
    }, [selectedCategory, priceRange, sortBy]);

    const toggleCompare = (id: string) => {
        setCompareList((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 3 ? [...prev, id] : prev
        );
    };

    const getCategoryLabel = () => {
        if (selectedCategory === 'all') return 'All Products';
        const cat = categories.find((c) => c.id === selectedCategory);
        return cat ? cat.label : 'Products';
    };

    const priceSteps = [
        { label: 'Under ₹50K', range: [0, 50000] as [number, number] },
        { label: '₹50K - ₹1L', range: [50000, 100000] as [number, number] },
        { label: '₹1L - ₹3L', range: [100000, 300000] as [number, number] },
        { label: '₹3L - ₹5L', range: [300000, 500000] as [number, number] },
        { label: 'Above ₹5L', range: [500000, 1500000] as [number, number] },
        { label: 'All Prices', range: [0, 1500000] as [number, number] },
    ];

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
            {/* Breadcrumb */}
            <div style={{
                background: 'linear-gradient(135deg, #0a1628, #0d2145)',
                padding: '20px 0',
                borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
            }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <motion.a
                            onClick={() => onNavigate('/')}
                            style={{ fontFamily: 'Lora, serif', fontSize: '13px', color: '#94a3b8', cursor: 'pointer' }}
                            whileHover={{ color: '#FFD700' }}
                        >
                            Home
                        </motion.a>
                        <ChevronRight size={14} style={{ color: '#475569' }} />
                        <motion.a
                            onClick={() => { setSelectedCategory('all'); onNavigate('/store'); }}
                            style={{ fontFamily: 'Lora, serif', fontSize: '13px', color: '#94a3b8', cursor: 'pointer' }}
                            whileHover={{ color: '#FFD700' }}
                        >
                            Store
                        </motion.a>
                        {selectedCategory !== 'all' && (
                            <>
                                <ChevronRight size={14} style={{ color: '#475569' }} />
                                <span style={{ fontFamily: 'Lora, serif', fontSize: '13px', color: '#FFD700' }}>
                                    {getCategoryLabel()}
                                </span>
                            </>
                        )}
                    </div>

                    {/* Page Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontFamily: 'Gloock, serif',
                            fontSize: '32px',
                            color: '#fff',
                            marginTop: '12px',
                        }}
                    >
                        {getCategoryLabel()}
                    </motion.h1>
                    <p style={{
                        fontFamily: 'Lora, serif',
                        fontSize: '14px',
                        color: '#94a3b8',
                        marginTop: '4px',
                    }}>
                        {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px', display: 'flex', gap: '32px' }}>
                {/* Sidebar */}
                <AnimatePresence>
                    {sidebarOpen && (
                        <motion.aside
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            style={{
                                width: '280px',
                                flexShrink: 0,
                            }}
                        >
                            {/* Categories Filter */}
                            <div style={{
                                background: '#fff',
                                borderRadius: '16px',
                                padding: '24px',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                                marginBottom: '20px',
                            }}>
                                <h3 style={{
                                    fontFamily: 'Gloock, serif',
                                    fontSize: '16px',
                                    color: '#0a1628',
                                    marginBottom: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                }}>
                                    <SlidersHorizontal size={18} style={{ color: '#0066CC' }} />
                                    Filter by Category
                                </h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    {/* All Products */}
                                    <motion.button
                                        onClick={() => setSelectedCategory('all')}
                                        whileHover={{ x: 4 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            padding: '10px 14px',
                                            borderRadius: '10px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontFamily: 'Lora, serif',
                                            fontSize: '14px',
                                            textAlign: 'left' as const,
                                            background: selectedCategory === 'all' ? 'linear-gradient(135deg, #0066CC, #0052A3)' : '#f8fafc',
                                            color: selectedCategory === 'all' ? '#fff' : '#374151',
                                            transition: 'all 0.2s',
                                        }}
                                    >
                                        <Grid3X3 size={16} />
                                        All Products
                                    </motion.button>

                                    {categories.map((cat) => {
                                        const Icon = categoryIcons[cat.id] || Grid3X3;
                                        const isActive = selectedCategory === cat.id;
                                        const count = products.filter((p) => p.category === cat.id).length;
                                        return (
                                            <motion.button
                                                key={cat.id}
                                                onClick={() => setSelectedCategory(cat.id)}
                                                whileHover={{ x: 4 }}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    padding: '10px 14px',
                                                    borderRadius: '10px',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    fontFamily: 'Lora, serif',
                                                    fontSize: '14px',
                                                    textAlign: 'left' as const,
                                                    background: isActive ? 'linear-gradient(135deg, #0066CC, #0052A3)' : '#f8fafc',
                                                    color: isActive ? '#fff' : '#374151',
                                                    transition: 'all 0.2s',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <Icon size={16} />
                                                    {cat.label}
                                                </span>
                                                <span style={{
                                                    fontSize: '11px',
                                                    background: isActive ? 'rgba(255,255,255,0.2)' : '#e2e8f0',
                                                    padding: '2px 8px',
                                                    borderRadius: '10px',
                                                    color: isActive ? '#fff' : '#64748b',
                                                }}>
                                                    {count}
                                                </span>
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Price Range Filter */}
                            <div style={{
                                background: '#fff',
                                borderRadius: '16px',
                                padding: '24px',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                            }}>
                                <h3 style={{
                                    fontFamily: 'Gloock, serif',
                                    fontSize: '16px',
                                    color: '#0a1628',
                                    marginBottom: '16px',
                                }}>
                                    Price Range
                                </h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    {priceSteps.map((step) => {
                                        const isActive = priceRange[0] === step.range[0] && priceRange[1] === step.range[1];
                                        return (
                                            <motion.button
                                                key={step.label}
                                                onClick={() => setPriceRange(step.range)}
                                                whileHover={{ x: 4 }}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    padding: '8px 14px',
                                                    borderRadius: '10px',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    fontFamily: 'Lora, serif',
                                                    fontSize: '13px',
                                                    textAlign: 'left' as const,
                                                    background: isActive ? 'linear-gradient(135deg, #FFD700, #FFA500)' : '#f8fafc',
                                                    color: isActive ? '#0a1628' : '#374151',
                                                    fontWeight: isActive ? 600 : 400,
                                                    transition: 'all 0.2s',
                                                }}
                                            >
                                                {step.label}
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.aside>
                    )}
                </AnimatePresence>

                {/* Product Grid */}
                <div style={{ flex: 1 }}>
                    {/* Toolbar */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '24px',
                    }}>
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '8px 16px',
                                borderRadius: '10px',
                                border: '1px solid #e2e8f0',
                                background: '#fff',
                                cursor: 'pointer',
                                fontFamily: 'Lora, serif',
                                fontSize: '13px',
                                color: '#374151',
                            }}
                        >
                            <SlidersHorizontal size={14} />
                            {sidebarOpen ? 'Hide Filters' : 'Show Filters'}
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: '10px',
                                    border: '1px solid #e2e8f0',
                                    background: '#fff',
                                    fontFamily: 'Lora, serif',
                                    fontSize: '13px',
                                    color: '#374151',
                                    cursor: 'pointer',
                                }}
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                            </select>

                            <div style={{ display: 'flex', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                                <button
                                    onClick={() => setViewMode('grid')}
                                    style={{
                                        padding: '8px 12px',
                                        border: 'none',
                                        background: viewMode === 'grid' ? '#0066CC' : '#fff',
                                        color: viewMode === 'grid' ? '#fff' : '#374151',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <Grid3X3 size={16} />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    style={{
                                        padding: '8px 12px',
                                        border: 'none',
                                        borderLeft: '1px solid #e2e8f0',
                                        background: viewMode === 'list' ? '#0066CC' : '#fff',
                                        color: viewMode === 'list' ? '#fff' : '#374151',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <List size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Cards Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: viewMode === 'grid'
                            ? (sidebarOpen ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)')
                            : '1fr',
                        gap: '20px',
                    }}>
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product, index) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    index={index}
                                    onNavigate={onNavigate}
                                    isCompared={compareList.includes(product.id)}
                                    onToggleCompare={() => toggleCompare(product.id)}
                                    viewMode={viewMode}
                                />
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredProducts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{
                                textAlign: 'center',
                                padding: '80px 0',
                            }}
                        >
                            <p style={{ fontFamily: 'Gloock, serif', fontSize: '24px', color: '#374151', marginBottom: '8px' }}>
                                No Products Found
                            </p>
                            <p style={{ fontFamily: 'Lora, serif', fontSize: '14px', color: '#94a3b8' }}>
                                Try adjusting your filters to find what you're looking for.
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Compare Bar */}
            <AnimatePresence>
                {compareList.length > 0 && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        style={{
                            position: 'fixed',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(135deg, #0a1628, #0d2145)',
                            border: '1px solid rgba(255, 215, 0, 0.15)',
                            padding: '16px 24px',
                            zIndex: 999,
                            boxShadow: '0 -10px 40px rgba(0,0,0,0.3)',
                        }}
                    >
                        <div style={{
                            maxWidth: '1280px',
                            margin: '0 auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <span style={{
                                    fontFamily: 'Gloock, serif',
                                    fontSize: '14px',
                                    color: '#FFD700',
                                }}>
                                    Compare ({compareList.length}/3)
                                </span>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    {compareList.map((id) => {
                                        const p = products.find((x) => x.id === id);
                                        return p ? (
                                            <div
                                                key={id}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    background: 'rgba(255,255,255,0.08)',
                                                    padding: '6px 12px',
                                                    borderRadius: '10px',
                                                }}
                                            >
                                                <span style={{ fontFamily: 'Lora, serif', fontSize: '12px', color: '#fff' }}>
                                                    {p.title}
                                                </span>
                                                <X
                                                    size={14}
                                                    style={{ color: '#94a3b8', cursor: 'pointer' }}
                                                    onClick={() => toggleCompare(id)}
                                                />
                                            </div>
                                        ) : null;
                                    })}
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button
                                    onClick={() => setCompareList([])}
                                    style={{
                                        fontFamily: 'Lora, serif',
                                        fontSize: '13px',
                                        color: '#94a3b8',
                                        background: 'transparent',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '8px 20px',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Clear All
                                </button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        fontFamily: 'Lora, serif',
                                        fontSize: '13px',
                                        fontWeight: 600,
                                        color: '#0a1628',
                                        background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                                        border: 'none',
                                        padding: '8px 24px',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Compare Now
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ─── Product Card Component ─── */
function ProductCard({
    product,
    index,
    onNavigate,
    isCompared,
    onToggleCompare,
    viewMode,
}: {
    product: Product;
    index: number;
    onNavigate: (path: string) => void;
    isCompared: boolean;
    onToggleCompare: () => void;
    viewMode: 'grid' | 'list';
}) {
    if (viewMode === 'list') {
        return (
            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                style={{
                    display: 'flex',
                    gap: '20px',
                    background: '#fff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                }}
                whileHover={{ y: -2, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                onClick={() => onNavigate(`/product/${product.slug}`)}
            >
                <div style={{ width: '200px', height: '180px', flexShrink: 0, position: 'relative' }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {product.badge && (
                        <span style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                            color: '#0a1628',
                            fontFamily: 'Lora, serif',
                            fontSize: '10px',
                            fontWeight: 600,
                            padding: '4px 10px',
                            borderRadius: '6px',
                        }}>
                            {product.badge}
                        </span>
                    )}
                </div>
                <div style={{ flex: 1, padding: '20px 20px 20px 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: '11px', color: '#0066CC', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: '4px' }}>
                            {product.brand}
                        </p>
                        <h3 style={{ fontFamily: 'Gloock, serif', fontSize: '18px', color: '#0a1628', marginBottom: '4px' }}>
                            {product.title}
                        </h3>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: '13px', color: '#64748b', marginBottom: '8px' }}>
                            {product.shortDescription}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ display: 'flex', gap: '2px' }}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={12}
                                        fill={i < Math.floor(product.rating) ? '#FFD700' : 'none'}
                                        stroke={i < Math.floor(product.rating) ? '#FFD700' : '#d1d5db'}
                                    />
                                ))}
                            </div>
                            <span style={{ fontFamily: 'Lora, serif', fontSize: '12px', color: '#94a3b8' }}>
                                ({product.reviewCount})
                            </span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <span style={{ fontFamily: 'Gloock, serif', fontSize: '20px', color: '#0066CC' }}>
                                {formatPrice(product.price)}
                            </span>
                            {product.originalPrice && (
                                <span style={{ fontFamily: 'Lora, serif', fontSize: '13px', color: '#94a3b8', textDecoration: 'line-through', marginLeft: '8px' }}>
                                    {formatPrice(product.originalPrice)}
                                </span>
                            )}
                        </div>
                        <label
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontFamily: 'Lora, serif',
                                fontSize: '12px',
                                color: isCompared ? '#0066CC' : '#94a3b8',
                                cursor: 'pointer',
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={isCompared}
                                onChange={onToggleCompare}
                                style={{ accentColor: '#0066CC' }}
                            />
                            Compare
                        </label>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: index * 0.05 }}
            style={{
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
            }}
            whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
            onClick={() => onNavigate(`/product/${product.slug}`)}
        >
            {/* Image */}
            <div style={{ position: 'relative', paddingTop: '75%', overflow: 'hidden' }}>
                <img
                    src={product.image}
                    alt={product.title}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {product.badge && (
                    <span style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                        color: '#0a1628',
                        fontFamily: 'Lora, serif',
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '4px 12px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(255, 165, 0, 0.3)',
                    }}>
                        {product.badge}
                    </span>
                )}

                {/* Compare checkbox on image */}
                <motion.label
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: isCompared ? 'rgba(0, 102, 204, 0.9)' : 'rgba(255,255,255,0.85)',
                        backdropFilter: 'blur(8px)',
                        padding: '6px 10px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontFamily: 'Lora, serif',
                        fontSize: '11px',
                        color: isCompared ? '#fff' : '#374151',
                        fontWeight: 500,
                        transition: 'all 0.2s',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={isCompared}
                        onChange={onToggleCompare}
                        style={{ accentColor: '#0066CC', width: '14px', height: '14px' }}
                    />
                    Compare
                </motion.label>
            </div>

            {/* Content */}
            <div style={{ padding: '16px 18px 20px' }}>
                <p style={{
                    fontFamily: 'Lora, serif',
                    fontSize: '11px',
                    color: '#0066CC',
                    fontWeight: 600,
                    textTransform: 'uppercase' as const,
                    letterSpacing: '1px',
                    marginBottom: '4px',
                }}>
                    {product.brand}
                </p>
                <h3 style={{
                    fontFamily: 'Gloock, serif',
                    fontSize: '16px',
                    color: '#0a1628',
                    marginBottom: '4px',
                }}>
                    {product.title}
                </h3>
                <p style={{
                    fontFamily: 'Lora, serif',
                    fontSize: '12px',
                    color: '#64748b',
                    marginBottom: '10px',
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical' as const,
                    overflow: 'hidden',
                }}>
                    {product.shortDescription}
                </p>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                size={13}
                                fill={i < Math.floor(product.rating) ? '#FFD700' : 'none'}
                                stroke={i < Math.floor(product.rating) ? '#FFD700' : '#d1d5db'}
                            />
                        ))}
                    </div>
                    <span style={{ fontFamily: 'Lora, serif', fontSize: '12px', color: '#94a3b8' }}>
                        {product.rating} ({product.reviewCount})
                    </span>
                </div>

                {/* Price */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ fontFamily: 'Gloock, serif', fontSize: '20px', color: '#0066CC' }}>
                        {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                        <span style={{
                            fontFamily: 'Lora, serif',
                            fontSize: '13px',
                            color: '#94a3b8',
                            textDecoration: 'line-through',
                        }}>
                            {formatPrice(product.originalPrice)}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
