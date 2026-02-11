import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Star, ChevronRight, Minus, Plus, ShoppingCart,
    Shield, Truck, Headphones, Monitor, Zap, Move, Eye,
    ChevronDown, Check, RotateCcw, Award, Wrench
} from 'lucide-react';
import { getProductById, formatPrice, type Product } from '../data/products';

interface ProductDetailPageProps {
    productId: string;
    onNavigate: (path: string) => void;
}

const featureIcons: Record<string, React.ElementType> = {
    monitor: Monitor,
    contrast: Eye,
    zap: Zap,
    move: Move,
};

export function ProductDetailPage({ productId, onNavigate }: ProductDetailPageProps) {
    const product = getProductById(productId);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [compareActive, setCompareActive] = useState(false);
    const [expandedSpec, setExpandedSpec] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    if (!product) {
        return (
            <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Gloock, serif', fontSize: '28px', color: '#0a1628', marginBottom: '12px' }}>
                        Product Not Found
                    </h2>
                    <p style={{ fontFamily: 'Lora, serif', color: '#64748b', marginBottom: '20px' }}>
                        The product you're looking for doesn't exist.
                    </p>
                    <motion.button
                        onClick={() => onNavigate('/store')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            fontFamily: 'Lora, serif',
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#fff',
                            background: '#0066CC',
                            border: 'none',
                            padding: '12px 28px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                        }}
                    >
                        Browse Store
                    </motion.button>
                </div>
            </div>
        );
    }

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : null;

    const gstAmount = Math.round(product.price * 0.18);
    const priceExGst = product.price - gstAmount;

    return (
        <div style={{ background: '#f8fafc' }}>
            {/* Breadcrumb */}
            <div style={{
                background: 'linear-gradient(135deg, #0a1628, #0d2145)',
                padding: '16px 0',
                borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
            }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        {[
                            { label: 'Home', path: '/' },
                            { label: 'Store', path: '/store' },
                            ...(isMobile ? [] : [
                                { label: getCategoryLabel(product.category), path: `/store/${product.category}` },
                                { label: product.brand, path: `/store/${product.category}` },
                            ]),
                        ].map((crumb, i) => (
                            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {i > 0 && <ChevronRight size={14} style={{ color: '#475569' }} />}
                                <motion.a
                                    onClick={() => onNavigate(crumb.path)}
                                    style={{
                                        fontFamily: 'Lora, serif',
                                        fontSize: '13px',
                                        color: '#94a3b8',
                                        cursor: 'pointer',
                                    }}
                                    whileHover={{ color: '#FFD700' }}
                                >
                                    {crumb.label}
                                </motion.a>
                            </span>
                        ))}
                        <ChevronRight size={14} style={{ color: '#475569' }} />
                        <span style={{
                            fontFamily: 'Lora, serif',
                            fontSize: '13px',
                            color: '#FFD700',
                            wordBreak: 'break-word',
                        }}>
                            {product.title}
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Product Section */}
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '24px 16px' : '40px 24px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: isMobile ? '24px' : '60px',
                    alignItems: 'start',
                }}>
                    {/* Left: Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Main Image */}
                        <div style={{
                            position: 'relative',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            background: '#fff',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                            marginBottom: '16px',
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={selectedImageIndex}
                                    src={product.images[selectedImageIndex] || product.image}
                                    alt={product.title}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        width: '100%',
                                        height: isMobile ? '280px' : '480px',
                                        objectFit: 'cover',
                                        display: 'block',
                                    }}
                                />
                            </AnimatePresence>

                            {/* Badge */}
                            {product.badge && (
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{
                                        position: 'absolute',
                                        top: '16px',
                                        left: '16px',
                                        background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                                        color: '#0a1628',
                                        fontFamily: 'Lora, serif',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        padding: '6px 16px',
                                        borderRadius: '10px',
                                        boxShadow: '0 4px 12px rgba(255, 165, 0, 0.3)',
                                    }}
                                >
                                    {product.badge}
                                </motion.span>
                            )}

                            {discount && (
                                <span style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    background: 'rgba(220, 38, 38, 0.9)',
                                    color: '#fff',
                                    fontFamily: 'Lora, serif',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    padding: '6px 12px',
                                    borderRadius: '10px',
                                }}>
                                    -{discount}% OFF
                                </span>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {product.images.length > 1 && (
                            <div style={{
                                display: 'flex',
                                gap: '10px',
                                overflowX: 'auto',
                                paddingBottom: '4px',
                            }}>
                                {product.images.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        onClick={() => setSelectedImageIndex(i)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            width: isMobile ? '60px' : '80px',
                                            height: isMobile ? '60px' : '80px',
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            border: selectedImageIndex === i
                                                ? '3px solid #0066CC'
                                                : '3px solid transparent',
                                            boxShadow: selectedImageIndex === i
                                                ? '0 0 0 2px rgba(0, 102, 204, 0.2)'
                                                : '0 1px 3px rgba(0,0,0,0.06)',
                                            transition: 'all 0.2s',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <img
                                            src={img}
                                            alt={`${product.title} view ${i + 1}`}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Right: Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {/* Brand */}
                        <p style={{
                            fontFamily: 'Lora, serif',
                            fontSize: '13px',
                            color: '#0066CC',
                            fontWeight: 600,
                            textTransform: 'uppercase' as const,
                            letterSpacing: '2px',
                            marginBottom: '8px',
                        }}>
                            {product.brand}
                        </p>

                        {/* Title */}
                        <h1 style={{
                            fontFamily: 'Gloock, serif',
                            fontSize: isMobile ? '24px' : '32px',
                            color: '#0a1628',
                            lineHeight: 1.2,
                            marginBottom: '6px',
                        }}>
                            {product.title}
                        </h1>

                        {/* Short Description */}
                        <p style={{
                            fontFamily: 'Lora, serif',
                            fontSize: '15px',
                            color: '#64748b',
                            marginBottom: '16px',
                        }}>
                            {product.shortDescription}
                        </p>

                        {/* Ratings */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '24px',
                            paddingBottom: '20px',
                            borderBottom: '1px solid #e2e8f0',
                            flexWrap: 'wrap',
                        }}>
                            <div style={{ display: 'flex', gap: '3px' }}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill={i < Math.floor(product.rating) ? '#FFD700' : 'none'}
                                        stroke={i < Math.floor(product.rating) ? '#FFD700' : '#d1d5db'}
                                    />
                                ))}
                            </div>
                            <span style={{ fontFamily: 'Lora, serif', fontSize: '14px', color: '#374151', fontWeight: 500 }}>
                                {product.rating}
                            </span>
                            <span style={{ fontFamily: 'Lora, serif', fontSize: '14px', color: '#94a3b8' }}>
                                ({product.reviewCount} reviews)
                            </span>
                            {product.inStock && (
                                <span style={{
                                    fontFamily: 'Lora, serif',
                                    fontSize: '12px',
                                    color: '#16a34a',
                                    background: '#f0fdf4',
                                    padding: '4px 12px',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                }}>
                                    <Check size={12} /> In Stock
                                </span>
                            )}
                        </div>

                        {/* Pricing */}
                        <div style={{
                            background: 'linear-gradient(135deg, #f0f7ff, #f8fafc)',
                            borderRadius: '16px',
                            padding: isMobile ? '16px' : '20px',
                            marginBottom: '24px',
                            border: '1px solid #e0edff',
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '10px',
                                marginBottom: '8px',
                                flexWrap: 'wrap',
                            }}>
                                <span style={{ fontFamily: 'Gloock, serif', fontSize: isMobile ? '28px' : '36px', color: '#0066CC' }}>
                                    {formatPrice(product.price)}
                                </span>
                                {product.originalPrice && (
                                    <span style={{
                                        fontFamily: 'Lora, serif',
                                        fontSize: isMobile ? '15px' : '18px',
                                        color: '#94a3b8',
                                        textDecoration: 'line-through',
                                    }}>
                                        {formatPrice(product.originalPrice)}
                                    </span>
                                )}
                                {discount && (
                                    <span style={{
                                        fontFamily: 'Lora, serif',
                                        fontSize: '14px',
                                        color: '#dc2626',
                                        fontWeight: 600,
                                    }}>
                                        Save {formatPrice(product.originalPrice! - product.price)}
                                    </span>
                                )}
                            </div>
                            <div style={{
                                fontFamily: 'Lora, serif',
                                fontSize: '13px',
                                color: '#64748b',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '4px',
                            }}>
                                <span>Price excl. GST: {formatPrice(priceExGst)}</span>
                                <span style={{ color: '#94a3b8', fontSize: '12px' }}>
                                    Includes GST ({formatPrice(gstAmount)}) • Free shipping on all orders
                                </span>
                            </div>
                        </div>

                        {/* Quantity Selector & Add to Cart */}
                        <div style={{
                            display: 'flex',
                            gap: '12px',
                            alignItems: 'center',
                            marginBottom: '16px',
                        }}>
                            {/* Quantity */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                border: '2px solid #e2e8f0',
                                borderRadius: '12px',
                                overflow: 'hidden',
                            }}>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        border: 'none',
                                        background: '#f8fafc',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#374151',
                                    }}
                                >
                                    <Minus size={16} />
                                </motion.button>
                                <span style={{
                                    width: '44px',
                                    textAlign: 'center',
                                    fontFamily: 'Lora, serif',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: '#0a1628',
                                }}>
                                    {quantity}
                                </span>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        border: 'none',
                                        background: '#f8fafc',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#374151',
                                    }}
                                >
                                    <Plus size={16} />
                                </motion.button>
                            </div>

                            {/* Add to Cart */}
                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(0, 102, 204, 0.3)' }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    padding: '14px 20px',
                                    background: 'linear-gradient(135deg, #0066CC, #0052A3)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    fontFamily: 'Lora, serif',
                                    fontSize: isMobile ? '14px' : '16px',
                                    fontWeight: 600,
                                    transition: 'all 0.3s',
                                }}
                            >
                                <ShoppingCart size={20} />
                                Add to Cart
                            </motion.button>
                        </div>

                        {/* Compare Toggle */}
                        <motion.button
                            onClick={() => setCompareActive(!compareActive)}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                padding: '12px',
                                border: `2px solid ${compareActive ? '#0066CC' : '#e2e8f0'}`,
                                borderRadius: '12px',
                                background: compareActive ? '#f0f7ff' : '#fff',
                                cursor: 'pointer',
                                fontFamily: 'Lora, serif',
                                fontSize: '14px',
                                color: compareActive ? '#0066CC' : '#64748b',
                                fontWeight: 500,
                                transition: 'all 0.2s',
                                marginBottom: '24px',
                            }}
                        >
                            {compareActive ? (
                                <>
                                    <Check size={16} /> Added to Compare
                                </>
                            ) : (
                                '+ Add to Compare'
                            )}
                        </motion.button>

                        {/* Key Specs Quick View */}
                        {Object.keys(product.specs).length > 0 && (
                            <div style={{
                                background: '#fff',
                                borderRadius: '14px',
                                padding: '18px',
                                border: '1px solid #e2e8f0',
                            }}>
                                <h4 style={{
                                    fontFamily: 'Gloock, serif',
                                    fontSize: '14px',
                                    color: '#0a1628',
                                    marginBottom: '12px',
                                }}>
                                    Key Specifications
                                </h4>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                                    gap: '8px',
                                }}>
                                    {Object.entries(product.specs).slice(0, 6).map(([key, value]) => (
                                        <div key={key} style={{
                                            background: '#f8fafc',
                                            padding: '10px 12px',
                                            borderRadius: '10px',
                                        }}>
                                            <p style={{ fontFamily: 'Lora, serif', fontSize: '11px', color: '#94a3b8', marginBottom: '2px' }}>
                                                {key}
                                            </p>
                                            <p style={{ fontFamily: 'Lora, serif', fontSize: '13px', color: '#0a1628', fontWeight: 500 }}>
                                                {value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Assurance Bar */}
            <div style={{
                background: 'linear-gradient(135deg, #0a1628, #0d2145)',
                borderTop: '1px solid rgba(255, 215, 0, 0.1)',
                borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
            }}>
                <div style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: isMobile ? '24px 16px' : '32px 24px',
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                    gap: isMobile ? '16px' : '32px',
                }}>
                    {[
                        {
                            icon: RotateCcw,
                            title: '7-Day Simple Returns',
                            description: 'Hassle-free returns within 7 days of delivery',
                            color: '#3b82f6',
                        },
                        {
                            icon: Award,
                            title: 'Authorized Dealer Warranty',
                            description: 'Full manufacturer warranty with authorized service',
                            color: '#FFD700',
                        },
                        {
                            icon: Wrench,
                            title: 'Expert Installation Support',
                            description: 'Professional installation & calibration available',
                            color: '#10b981',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                padding: '16px 20px',
                                borderRadius: '16px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                            }}
                        >
                            <div style={{
                                width: isMobile ? '44px' : '52px',
                                height: isMobile ? '44px' : '52px',
                                borderRadius: '14px',
                                background: `${item.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <item.icon size={isMobile ? 20 : 24} style={{ color: item.color }} />
                            </div>
                            <div>
                                <h4 style={{
                                    fontFamily: 'Gloock, serif',
                                    fontSize: isMobile ? '13px' : '15px',
                                    color: '#fff',
                                    marginBottom: '4px',
                                }}>
                                    {item.title}
                                </h4>
                                <p style={{
                                    fontFamily: 'Lora, serif',
                                    fontSize: '12px',
                                    color: '#94a3b8',
                                    lineHeight: 1.4,
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Feature Highlights Section */}
            {product.features.length > 0 && (
                <div style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: isMobile ? '40px 16px' : '80px 24px',
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px' }}
                    >
                        <h2 style={{
                            fontFamily: 'Gloock, serif',
                            fontSize: isMobile ? '24px' : '36px',
                            color: '#0a1628',
                            marginBottom: '8px',
                        }}>
                            Why Choose the {product.title}
                        </h2>
                        <p style={{
                            fontFamily: 'Lora, serif',
                            fontSize: isMobile ? '14px' : '16px',
                            color: '#64748b',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}>
                            Engineered for the most discerning home cinema enthusiasts
                        </p>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                        gap: isMobile ? '16px' : '24px',
                    }}>
                        {product.features.map((feature, index) => {
                            const FeatureIcon = featureIcons[feature.icon] || Monitor;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
                                    style={{
                                        background: '#fff',
                                        borderRadius: '20px',
                                        padding: isMobile ? '24px' : '32px',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                                        border: '1px solid #f1f5f9',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    <div style={{
                                        width: isMobile ? '48px' : '56px',
                                        height: isMobile ? '48px' : '56px',
                                        borderRadius: '16px',
                                        background: 'linear-gradient(135deg, #0066CC15, #0066CC08)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: isMobile ? '16px' : '20px',
                                    }}>
                                        <FeatureIcon size={isMobile ? 24 : 28} style={{ color: '#0066CC' }} />
                                    </div>
                                    <h3 style={{
                                        fontFamily: 'Gloock, serif',
                                        fontSize: isMobile ? '17px' : '20px',
                                        color: '#0a1628',
                                        marginBottom: '10px',
                                    }}>
                                        {feature.title}
                                    </h3>
                                    <p style={{
                                        fontFamily: 'Lora, serif',
                                        fontSize: '14px',
                                        color: '#64748b',
                                        lineHeight: 1.7,
                                    }}>
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Full Specifications Table */}
            {Object.keys(product.specs).length > 0 && (
                <div style={{ background: '#fff', borderTop: '1px solid #e2e8f0' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '32px 16px' : '60px 24px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <button
                                onClick={() => setExpandedSpec(!expandedSpec)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    cursor: 'pointer',
                                    border: 'none',
                                    background: 'none',
                                    padding: '0 0 20px 0',
                                    borderBottom: '2px solid #e2e8f0',
                                    marginBottom: '24px',
                                }}
                            >
                                <h2 style={{
                                    fontFamily: 'Gloock, serif',
                                    fontSize: isMobile ? '22px' : '28px',
                                    color: '#0a1628',
                                    textAlign: 'left',
                                }}>
                                    Technical Specifications
                                </h2>
                                <motion.div
                                    animate={{ rotate: expandedSpec ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown size={24} style={{ color: '#64748b' }} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {expandedSpec && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                                            gap: '0',
                                        }}>
                                            {Object.entries(product.specs).map(([key, value], i) => (
                                                <div
                                                    key={key}
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        padding: '14px 18px',
                                                        borderBottom: '1px solid #f1f5f9',
                                                        background: i % 2 === 0 ? '#f8fafc' : '#fff',
                                                        borderRadius: '0',
                                                    }}
                                                >
                                                    <span style={{
                                                        fontFamily: 'Lora, serif',
                                                        fontSize: '14px',
                                                        color: '#64748b',
                                                    }}>
                                                        {key}
                                                    </span>
                                                    <span style={{
                                                        fontFamily: 'Lora, serif',
                                                        fontSize: '14px',
                                                        color: '#0a1628',
                                                        fontWeight: 500,
                                                        textAlign: 'right' as const,
                                                    }}>
                                                        {value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            )}

            {/* Full Description */}
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '32px 16px' : '60px 24px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: '#fff',
                        borderRadius: '20px',
                        padding: isMobile ? '24px' : '40px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                    }}
                >
                    <h2 style={{
                        fontFamily: 'Gloock, serif',
                        fontSize: isMobile ? '22px' : '28px',
                        color: '#0a1628',
                        marginBottom: '16px',
                    }}>
                        About This Product
                    </h2>
                    <p style={{
                        fontFamily: 'Lora, serif',
                        fontSize: isMobile ? '14px' : '16px',
                        color: '#374151',
                        lineHeight: 1.8,
                    }}>
                        {product.description}
                    </p>
                </motion.div>
            </div>

            {/* Bottom CTA */}
            <div style={{
                background: 'linear-gradient(135deg, #0a1628, #0d2145)',
                padding: isMobile ? '40px 16px' : '60px 24px',
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center',
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{
                            fontFamily: 'Gloock, serif',
                            fontSize: isMobile ? '24px' : '32px',
                            color: '#fff',
                            marginBottom: '12px',
                        }}>
                            Need Expert Guidance?
                        </h2>
                        <p style={{
                            fontFamily: 'Lora, serif',
                            fontSize: isMobile ? '14px' : '16px',
                            color: '#94a3b8',
                            marginBottom: '28px',
                            lineHeight: 1.6,
                        }}>
                            Our AV specialists can help you choose the perfect projector for your space.
                            Book a free consultation and get personalized recommendations.
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '12px',
                            justifyContent: 'center',
                            flexDirection: isMobile ? 'column' : 'row',
                        }}>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(255, 215, 0, 0.3)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    fontFamily: 'Lora, serif',
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    color: '#0a1628',
                                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                                    border: 'none',
                                    padding: '14px 36px',
                                    borderRadius: '14px',
                                    cursor: 'pointer',
                                }}
                            >
                                Book Free Consultation
                            </motion.button>
                            <motion.button
                                onClick={() => onNavigate('/store')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    fontFamily: 'Lora, serif',
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    color: '#fff',
                                    background: 'transparent',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    padding: '14px 36px',
                                    borderRadius: '14px',
                                    cursor: 'pointer',
                                }}
                            >
                                Continue Shopping
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
        projectors: 'Projectors',
        speakers: 'Speakers',
        'home-theater': 'Home Theater Packages',
        accessories: 'Accessories',
    };
    return labels[category] || 'Products';
}
