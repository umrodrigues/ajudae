
import { ReactNode } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';


interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
