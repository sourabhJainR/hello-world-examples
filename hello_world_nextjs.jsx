import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Hello World - NextJS</title>
            </Head>
            <main style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Hello, World!</h1>
                <p>This is a NextJS application with server-side rendering capabilities</p>
            </main>
        </div>
    );
}