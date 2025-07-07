import React from 'react'
import Image from 'next/image'

interface PortfolioItem {
    id: number
    image: string
    title: string
    description: string
    stack: string[]
    link: string
}

interface PortfolioCardItemProps {
    item: PortfolioItem
}

const PortfolioCardItem = ({ item }: PortfolioCardItemProps): JSX.Element => {
    return (
        <div
            style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: '20px',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                style={{
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '16px',
                }}
            />

            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>{item.title}</h3>

            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '12px' }}>{item.description}</p>

            <div style={{ marginBottom: '12px' }}>
                {item.stack.map((tech, index) => (
                    <span
                        key={index}
                        style={{
                            display: 'inline-block',
                            backgroundColor: '#eef1f4',
                            color: '#333',
                            borderRadius: '6px',
                            padding: '4px 10px',
                            fontSize: '0.75rem',
                            marginRight: '6px',
                        }}
                    >
            {tech}
          </span>
                ))}
            </div>

            <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'inline-block',
                    marginTop: 'auto',
                    color: '#0070f3',
                    textDecoration: 'underline',
                    fontWeight: 500,
                }}
            >
                View Project
            </a>
        </div>
    )
}

export default PortfolioCardItem
