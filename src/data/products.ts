export interface Product {
    id: string;
    slug: string;
    title: string;
    brand: string;
    category: 'projectors' | 'speakers' | 'home-theater' | 'accessories';
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    image: string;
    images: string[];
    badge?: string;
    inStock: boolean;
    description: string;
    shortDescription: string;
    features: {
        icon: string;
        title: string;
        description: string;
    }[];
    specs: Record<string, string>;
}

export const products: Product[] = [
    {
        id: 'epson-eh-tw9400',
        slug: 'epson-eh-tw9400',
        title: 'Epson EH-TW9400',
        brand: 'Epson',
        category: 'projectors',
        price: 349990,
        originalPrice: 399990,
        rating: 4.8,
        reviewCount: 127,
        image: 'https://images.unsplash.com/photo-1626379616459-b2ce81e0dcab?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1626379616459-b2ce81e0dcab?w=800&q=80',
            'https://images.unsplash.com/photo-1585503418537-88331351ad99?w=800&q=80',
            'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
            'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80',
        ],
        badge: 'Best Seller',
        inStock: true,
        description: 'Experience cinema-quality 4K PRO-UHD projection in the comfort of your home. The Epson EH-TW9400 delivers breathtaking image quality with 4K PRO-UHD technology, HDR10+ support, and an incredible 1,200,000:1 contrast ratio for the deepest blacks and most vibrant colors.',
        shortDescription: '4K PRO-UHD Home Cinema Projector with HDR10+ & Lens Shift',
        features: [
            {
                icon: 'monitor',
                title: '4K PRO-UHD Resolution',
                description: 'Pixel-shifting technology delivers stunning 4K-equivalent resolution with incredible detail and clarity for an immersive viewing experience.',
            },
            {
                icon: 'contrast',
                title: '1,200,000:1 Contrast',
                description: 'Ultra-high contrast ratio produces the deepest blacks and brightest whites for a truly cinematic HDR experience.',
            },
            {
                icon: 'zap',
                title: '2,600 Lumens Brightness',
                description: 'High brightness output ensures vivid, lifelike images even in rooms with ambient light.',
            },
            {
                icon: 'move',
                title: 'Motorized Lens Shift',
                description: 'Precise motorized horizontal and vertical lens shift allows for flexible installation without image distortion.',
            },
        ],
        specs: {
            'Display Technology': '3LCD with 4K PRO-UHD',
            'Native Resolution': '1920 x 1080 (4K Enhancement)',
            'Brightness': '2,600 Lumens (White/Color)',
            'Contrast Ratio': '1,200,000:1',
            'HDR Support': 'HDR10+ / HLG',
            'Lens': 'Powered Focus / Zoom / Shift',
            'Throw Ratio': '1.35–2.84:1',
            'Screen Size': '50" – 300"',
            'Lamp Life': '5,000 Hours (Normal)',
            'HDMI Ports': '2x HDMI 2.0',
            'Dimensions': '520 x 200 x 450 mm',
            'Weight': '11.2 kg',
        },
    },
    {
        id: 'epson-eh-ls12000b',
        slug: 'epson-eh-ls12000b',
        title: 'Epson EH-LS12000B',
        brand: 'Epson',
        category: 'projectors',
        price: 549990,
        rating: 4.9,
        reviewCount: 84,
        image: 'https://images.unsplash.com/photo-1585503418537-88331351ad99?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1585503418537-88331351ad99?w=800&q=80',
        ],
        badge: 'Premium',
        inStock: true,
        description: 'Native 4K laser projector with outstanding HDR performance.',
        shortDescription: 'Native 4K Laser Home Cinema Projector',
        features: [],
        specs: {
            'Display Technology': '3LCD Reflective (Native 4K)',
            'Resolution': '3840 x 2160',
            'Brightness': '2,700 Lumens',
            'Contrast Ratio': '2,500,000:1',
        },
    },
    {
        id: 'jbl-bar-1000',
        slug: 'jbl-bar-1000',
        title: 'JBL Bar 1000',
        brand: 'JBL',
        category: 'speakers',
        price: 129990,
        originalPrice: 149990,
        rating: 4.6,
        reviewCount: 203,
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80',
        ],
        badge: 'Popular',
        inStock: true,
        description: 'Immersive 7.1.4 channel Dolby Atmos soundbar with detachable surround speakers.',
        shortDescription: '7.1.4 Channel Dolby Atmos Soundbar System',
        features: [],
        specs: {
            'Channels': '7.1.4',
            'Total Power': '880W RMS',
            'Audio Format': 'Dolby Atmos / DTS:X',
        },
    },
    {
        id: 'jbl-synthesis-sdec-4500',
        slug: 'jbl-synthesis-sdec-4500',
        title: 'JBL Synthesis SDEC-4500',
        brand: 'JBL',
        category: 'speakers',
        price: 299990,
        rating: 4.7,
        reviewCount: 56,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
        ],
        inStock: true,
        description: 'Reference-grade surround processor for the ultimate home theater.',
        shortDescription: 'Reference Surround Sound Processor',
        features: [],
        specs: {
            'Channels': '16-Channel Processing',
            'Audio': 'Dolby Atmos / DTS:X Pro',
        },
    },
    {
        id: 'elac-debut-reference-dbr62',
        slug: 'elac-debut-reference-dbr62',
        title: 'ELAC Debut Reference DBR62',
        brand: 'ELAC',
        category: 'speakers',
        price: 89990,
        originalPrice: 99990,
        rating: 4.7,
        reviewCount: 178,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
        ],
        badge: 'Editor\'s Choice',
        inStock: true,
        description: 'Audiophile-grade bookshelf speakers designed by Andrew Jones.',
        shortDescription: 'Premium Bookshelf Speakers (Pair)',
        features: [],
        specs: {
            'Type': '2-Way Bookshelf',
            'Woofer': '6.5" Aramid Fiber',
            'Tweeter': '1" Soft Dome',
        },
    },
    {
        id: 'elac-navis-arb51',
        slug: 'elac-navis-arb51',
        title: 'ELAC Navis ARB-51',
        brand: 'ELAC',
        category: 'speakers',
        price: 199990,
        rating: 4.8,
        reviewCount: 64,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        ],
        badge: 'Premium',
        inStock: true,
        description: 'Powered bookshelf speakers with built-in amplification.',
        shortDescription: 'Powered Bookshelf Monitors',
        features: [],
        specs: {
            'Type': '3-Way Powered Monitor',
            'Amplification': '300W Total',
        },
    },
    {
        id: 'tappav-cinematic-7-1',
        slug: 'tappav-cinematic-7-1',
        title: 'TappAV Cinematic 7.1 Package',
        brand: 'TappAV',
        category: 'home-theater',
        price: 899990,
        originalPrice: 1099990,
        rating: 4.9,
        reviewCount: 42,
        image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
        ],
        badge: 'Bundle Deal',
        inStock: true,
        description: 'Complete 7.1 surround home theater package with Epson projector, ELAC speakers, and professional calibration.',
        shortDescription: 'Complete 7.1 Home Theater Package',
        features: [],
        specs: {
            'Includes': 'Projector + 7 Speakers + Subwoofer + AVR',
            'Calibration': 'Professional ISF Calibration Included',
        },
    },
    {
        id: 'tappav-immersive-5-1-4',
        slug: 'tappav-immersive-5-1-4',
        title: 'TappAV Immersive 5.1.4 Package',
        brand: 'TappAV',
        category: 'home-theater',
        price: 1299990,
        rating: 5.0,
        reviewCount: 18,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
        ],
        badge: 'Ultimate',
        inStock: true,
        description: 'Ultimate Dolby Atmos home theater package with laser projector and ceiling speakers.',
        shortDescription: 'Ultimate Dolby Atmos Theater Package',
        features: [],
        specs: {
            'Includes': 'Laser Projector + 9 Speakers + 2 Subs + Atmos AVR',
            'Calibration': 'Professional Calibration + Acoustic Treatment',
        },
    },
    {
        id: 'audioquest-hdmi-48',
        slug: 'audioquest-hdmi-48',
        title: 'AudioQuest HDMI 48G Cable',
        brand: 'AudioQuest',
        category: 'accessories',
        price: 12990,
        rating: 4.5,
        reviewCount: 312,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
        images: [],
        inStock: true,
        description: 'Premium 48Gbps HDMI cable for 4K/120Hz and 8K/60Hz content.',
        shortDescription: '48Gbps Premium HDMI 2.1 Cable (2m)',
        features: [],
        specs: {
            'Bandwidth': '48 Gbps',
            'Length': '2 meters',
        },
    },
    {
        id: 'elite-screens-aeon-120',
        slug: 'elite-screens-aeon-120',
        title: 'Elite Screens Aeon CLR 120"',
        brand: 'Elite Screens',
        category: 'accessories',
        price: 179990,
        originalPrice: 199990,
        rating: 4.7,
        reviewCount: 89,
        image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80',
        images: [],
        badge: 'Top Rated',
        inStock: true,
        description: '120" ambient light rejecting fixed-frame projection screen.',
        shortDescription: '120" ALR Fixed Frame Projection Screen',
        features: [],
        specs: {
            'Size': '120" Diagonal (16:9)',
            'Material': 'CLR Ambient Light Rejecting',
            'Gain': '0.8',
        },
    },
];

export const categories = [
    { id: 'projectors', label: 'Projectors', icon: 'projector' },
    { id: 'speakers', label: 'Speakers', icon: 'speaker' },
    { id: 'home-theater', label: 'Home Theater Packages', icon: 'home' },
    { id: 'accessories', label: 'Accessories', icon: 'cable' },
] as const;

export function getProductById(id: string) {
    return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string) {
    return products.filter((p) => p.category === category);
}

export function formatPrice(price: number): string {
    return '₹' + price.toLocaleString('en-IN');
}
