import Head from 'next/head'
import { ReactNode } from 'react';
import { Navbar } from '../ui';

interface Props {
  title: string;
  pageDescription: string;
  imageUrl?: string;
  children: ReactNode;
}

export function ShopLayout ({ children, title, pageDescription, imageUrl }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {
          imageUrl && (
            <meta name="og:image" content={imageUrl} />
          )
        }
      </Head>
      <nav>
        <Navbar />
      </nav>
      {/* TODO: Sidebar */}
      <main style={{
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0 30px',
        }}>
        {children }
      </main>
      {/* footer */}
      <footer>
        {/* TODO: Custom footer */}
      </footer>
    </>
  )
}