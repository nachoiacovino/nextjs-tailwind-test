import Head from 'next/head'

import { FeatureSection } from '../components/FeatureSection'
import { Presentation } from '../components/Presentation'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Presentation />
      <FeatureSection />
    </div>
  );
}
