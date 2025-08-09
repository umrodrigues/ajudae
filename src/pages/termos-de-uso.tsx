
import "../app/globals.css";
import DefaultLayout from "@/app/components/default-layout/default-layout";
import TermsOfUse from "@/app/components/terms-of-use/terms-of-use";


export default function TermosDeUso() {
  return (
    <>
     <DefaultLayout>
      <TermsOfUse/>
     </DefaultLayout>
    </>
  );
}
