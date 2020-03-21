export const pricingContent = {
    allPlans: [
        {
            name: 'Developer',
            des: 'Forever free account with some limitations',
            price: 'Free',
            btn: 'Get Started',
            redirect: '',
            btnClass: 'black-lighter bd-black-lightest'
        },
        {
            name: 'Team',
            des: 'All the functionality a growing team needs',
            price: '30$',
            btn: 'Purchase Now',
            redirect: '',
            btnClass: 'black-darker bd-black-lightest'
        },
        {
            suggest: 1,
            name: 'Business',
            des: 'All the functionality a growing business needs',
            price: '300$',
            btn: 'Purchase Now',
            redirect: '',
            btnClass: 'white bg-red bd-none',
            bestValue: true
        },
        {
            name: 'Enterprise',
            des: 'Customizable service platform to scale your mature IT organization',
            btn: 'Contact Us',
            redirect: '',
            btnClass: 'white bg-red bd-none'
        },
    ],
    defaultFeatures: [
        {
            name: 'Encoding Minutes (mins)',
            developer: '200',
            team: '2.000',
            business: '20.000',
            enterprise: 1,
        },
        {
            name: 'Storage (GB)',
            developer: '2',
            team: '50',
            business: '1.000',
            enterprise: 1,
        },
        {
            name: 'Delivery (GB)',
            developer: '5',
            team: '50',
            business: '1.000',
            enterprise: 1,
        },
        {
            name: 'Live entity',
            developer: '1',
            team: '10',
            business: '100',
            enterprise: 1,
        },
        {
            name: 'Live Record Stream DVR',
            developer: 'Fixed at the first 1 hours',
            team: 'Fixed at the first 3 hours',
            business: 'Fixed at the first 6 hours',
            enterprise: 1,
        },
        {
            name: 'Youtube, Facebook, Twitch... or any custom end point',
            developer: 'Limit to 1 additional destination',
            team: 'Limit to 3 additional destination',
            business: 'Limit to 10 additional destination',
            enterprise: 1,
        },
        {
            name: 'Encode the signal',
            developer: 'No encoding limit to 20,000 kbps',
            team: 'Encoding up to 1080p limit to 20,000 kbp',
            business: 'Encoding up to 4K limit to 20,000 kbp',
            enterprise: 1,
        },
        {
            name: 'Encoded Video Resolution',
            developer: 'Up to 720p',
            team: 'Up to 1080p',
            business: 'Up to 4K',
            enterprise: 'Up to 4K',
        },
        {
            name: 'Video Chunk duration',
            developer: 'Default at 6s',
            team: 'Default at 2s',
            business: 'Default at 2s',
            enterprise: 'Default at 2s',
        },
        {
            name: 'Communication Channel: Email',
            developer: 1,
            team: 1,
            business: 1,
            enterprise: 1,
        },
        {
            name: 'Communication Channel: Hotline',
            business: 1,
            enterprise: 1,
        },
        {
            name: 'Communication Channel: Private Chat',
            enterprise: 1,
        }
    ],
    expandedFeatures: [
        {
            name: 'Supported formats',
            developer: 'Popular formats (mp4, mov, mkv, m4v, avi, ts, mpg, webm, wmv)',
            team: 'Popular formats (mp4, mov, mkv, m4v, avi, ts, mpg, webm, wmv)',
            business: 'Popular formats and ProRes',
            enterprise: 'Popular formats and ProRes',
        },
        {
            name: 'Data Retention',
            developer: '7 days',
            team: '30 days',
            business: '90 days (can request more)',
            enterprise: 1,
        },
        {
            name: 'Time to response',
            developer: '48h',
            team: '48h',
            business: '24h',
            enterprise: '24/7',
        },
        {
            name: 'Allows users to create encoding presets with custom pre-defined profiles',
            team: 'Limit to 3 profiles per preset',
            business: 'Limit to 6 profiles per preset',
            enterprise: 1,
        },
        {
            name: 'Live Chunk duration',
            developer: 'Default at 10s',
            team: 'Select between these options: 10s, 4s and 2s',
            business: 'Select between these options: 10s, 4s and 2s',
            enterprise: 'Select between these options: 10s, 4s and 2s',
        },
        {
            name: 'Delivery from origin',
            developer: 'Up to 10 CCU/event',
            team: 'Up to 100 CCU/event',
            business: 'Up to 500 CCU/event',
            enterprise: 1,
        },
        {
            name: 'Video Codec',
            developer: 'H264',
            team: 'H264',
            business: 'H264, H265, VP9',
            enterprise: 'H264, H265, VP9',
        },
        {
            name: 'API Key per application',
            developer: '1',
            team: 'Limit at 10 keys',
            business: 'Limit at 50 keys',
            enterprise: 1,
        },
        {
            name: 'Maximum applications',
            developer: '1',
            team: '3',
            business: '10',
            enterprise: 1,
        },
        {
            name: 'Using RTMP (H264)',
            developer: 1,
            team: 1,
            business: 1,
            enterprise: 1,
        },
        {
            name: 'DASH and HLS fMP4',
            developer: 1,
            team: 1,
            business: 1,
            enterprise: 1,
        },
        {
            name: 'Uiza CDN',
            developer: 1,
            team: 1,
            business: 1,
            enterprise: 1,
        },
        {
            name: 'Capture thumbnail from the video',
            developer: 0,
            team: 1,
            business: 1,
            enterprise: 1,
        },
        {
            name: 'Uiza\'s CDN network',
            team: 1,
            business: 1,
            enterprise: 1,
        },
    ],
    overchargeCost: [
        {
            type: 'Encoding Minutes/Min',
            value: 1,
        },
        {
            type: 'Storage/GB',
            value: 3,
        },
        {
            type: 'Delivery/GB',
            value: 7,
        },
        {
            type: 'Live Entity/Entity',
            value: 1,
        }
    ]
}