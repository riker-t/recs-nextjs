import styles from './PricingTiers.module.css'

export default function PricingTiers() {
    const tiers = [
        {
            name: 'Free',
            description: 'Ideal for personal use with basic features.',
            price: '$0',
            features: [
                'Unlimited list creation with basic properties (photos, links, star ratings, and descriptions)',
                'Access to 3 months of analytics data',
                'Ideal for casual users and those new to the platform',
            ],
        },
        {
            name: 'Professional',
            description: 'Perfect for professionals who need advanced features.',
            price: '$19',
            features: [
                'All features of the Free tier, plus:',
                'Custom branding and styles for lists to align with personal or corporate branding',
                'Full, unlimited access to analytics data',
                'Perfect for content creators and influencers seeking advanced customization and insights',
            ],
        },
        {
            name: 'Team',
            description: 'Designed for larger agencies and creator teams.',
            price: '$79',
            features: [
                'All features of the Professional tier, plus:',
                'Multi-user collaboration on a single list',
                'Designed for larger agencies and creators with multiple team members working together',
                'Facilitates streamlined team workflows and content management',
            ],
        },
    ];

    return (
        <div className={styles.pricingTiersContainer}>
            <div className={styles.pricingTiers}>
                {tiers.map((tier, index) => (
                    <div key={index} className={styles.tierCard}>
                        <h2>{tier.name}</h2>
                        <p>{tier.description}</p>
                        <h3>{tier.price}/month</h3>
                        <ul>
                            {tier.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
