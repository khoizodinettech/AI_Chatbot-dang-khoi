import Choose from "@/components/choose/choose";
import ClientSay from "@/components/client-say/clientSay";
import Experience from "@/components/experience/experience";
import Header from "@/components/header/header";
import Simple from "@/components/simple/simple";


export default function Home() {
  return (
    <div>
      <main className="overflow-hidden">
        <Header/>
        <Choose />
        <ClientSay />
        <Simple />
        <Experience />
      </main>
    </div>
  );
}
