"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Shield,
  AlertTriangle,
  User,
  FileText,
  Car,
  Search,
  X,
  Minus,
  Square,
  BadgeInfo,
} from "lucide-react";
import Image from "next/image";

const officers = [
  {
    id: 1,
    name: "Jhon Doc",
    rank: "Sheriff",
    badge: "#200",
    bio: "Muito velho, ninguém tem ideia da idade e nem da data de nascimento, mas com toda certeza viu a inquisição espanhola de perto.",
    status: "ATIVO",
  },
  {
    id: 2,
    name: "Phillip Graves",
    rank: "Undersheriff",
    badge: "#210",
    bio: "Ninguém sabe exatamente como chegou no cargo que chegou, possivelmente maluco.",
    status: "ATIVO",
  },
  {
    id: 3,
    name: "Cory Castro",
    rank: "Lieutenant",
    badge: "#222",
    bio: "Possivelmente furry mas se nega, talvez por vergonha. Busca namoro mas nunca encontra.",
    status: "ATIVO",
  },
  {
    id: 4,
    name: "Bob Lee",
    rank: "Lieutenant",
    badge: "#244",
    bio: "Talvez seja o mais normal (mas nem tanto).",
    status: "ATIVO",
  },
  {
    id: 5,
    name: "Gregor Samsa",
    rank: "Senior Deputy (Bonus II)",
    badge: "#269",
    bio: "Maluco, apenas maluco. Banido de várias cidades por motivos desconhecidos.",
    status: "ATIVO",
  },
  {
    id: 6,
    name: "Aristofodeles Piccoli",
    rank: "Deputy",
    badge: "#269",
    bio: "Totalmente maluco da cabeça, mas foi o idealizador da sexta da viatura maluca.",
    status: "ATIVO",
  },
];

const notices = [
  {
    id: 1,
    type: "WANTED",
    title: "Os Prodígios que mandam",
    crime: "Inaptos para viver em sociedade",
    reward: "$5,000,000",
    danger: "HIGH, BECAUSE THEY'RE DUMB",
    date: "2031-10-24",
    protocol: "NHSO-W-9901",
  },
  {
    id: 2,
    type: "WANTED",
    title: "Thunder Gang",
    crime: "Deixaram lixo na rua (os próprios membros)",
    reward: "$15,000",
    danger: "MEDIUM",
    date: "2031-10-22",
    protocol: "NHSO-W-8823",
  },
  {
    id: 3,
    type: "WANTED",
    title: "Ryu do Up-N-Atom",
    crime: "Sofreu cyberbullying e ao invés de desligar o modem atirou nos outros",
    reward: "$500",
    danger: "LOW",
    date: "2031-10-20",
    protocol: "NHSO-W-7712",
  },
  {
    id: 4,
    type: "NOTICE",
    title: "Operação 'Ruas Limpas'",
    desc: "Bloqueio massivo na I-5 em direção a Hive City. Espere atrasos e buscas aleatórias em veículos por Pißwasser contrabandeada (ou não mas peguem as bebidas mesmo assim e deixem na geladeira do departamento).",
    date: "2031-10-25",
    protocol: "NHSO-N-4451",
  },
  {
    id: 5,
    type: "NOTICE",
    title: "Recall do Mochi Cruiser 2030",
    desc: "Todos os Mochi Cruisers 2030 devem ser devolvidos à frota de veículos. Há relatos de que as sirenes estão tocando álbuns do grupo de K-POP 'Twice' em vez do som de alerta.",
    date: "2031-10-23",
    protocol: "NHSO-N-4450",
  },
  {
    id: 6,
    type: "RECRUITMENT",
    title: "Junte-se à Força!",
    desc: "Requisitos: Deve ser capaz de correr 100m sem desmaiar, possuir uma carteira de motorista válida (ou uma falsificação muito boa) e ter menos de 3 mandados ativos. Rosquinhas grátis às sextas-feiras!",
    date: "2031-10-15",
    protocol: "NHSO-R-1001",
  },
];

const vehicles = [
  {
    id: 1,
    name: "Gravion",
    year: "2029",
    type: "Moto",
    desc: "Motocicleta ágil e rápida, perfeita para perseguições em becos estreitos e para fugir do trânsito de Hive City.",
    image: "/images/vehicles/gravion.png",
    ranks: "MU Certified",
  },
  {
    id: 2,
    name: "Alamo HF",
    year: "2031",
    type: "SUV",
    desc: "Veículo utilitário esportivo robusto. Ideal para terrenos acidentados e para transportar equipamentos pesados.",
    image: "/images/vehicles/alamohf.png",
    ranks: "Senior Deputy+",
  },
  {
    id: 3,
    name: "Everon Pursuit",
    year: "2032",
    type: "Caminhonete HSPU",
    desc: "Caminhonete de perseguição de alta velocidade. Modificada pela HSPU para aguentar impactos severos.",
    image: "/images/vehicles/everonpursuit.png",
    ranks: "Caminhonete HSPU",
  },
  {
    id: 4,
    name: "Mochi Cruiser",
    year: "2030",
    type: "Police Cruiser",
    desc: "A famosa 'Baratinha'. A espinha dorsal da frota do Xerife da NHSO. Equipado com um V8 biturbo, barra de impulsão reforçada e uma sirene tão alta que viola três leis de poluição sonora diferentes.",
    image: "/images/vehicles/mochi.png",
    ranks: "All ranks",
  },
  {
    id: 5,
    name: "Sadler CTX",
    year: "2030",
    type: "Caminhonete",
    desc: "Caminhonete padrão de patrulha. Confiável, resistente e com muito espaço na caçamba.",
    image: "/images/vehicles/sadlerctx.png",
    ranks: "Senior Deputy+",
  },
  {
    id: 6,
    name: "Banshee Interceptor",
    year: "2031",
    type: "HSPU",
    desc: "Esportivo modificado para interceptação em rodovias. Aceleração absurda e manuseio arisco.",
    image: "/images/vehicles/bansheeinterceptor.png",
    ranks: "HSPU Certified",
  },
  {
    id: 7,
    name: "Coquette Interceptor",
    year: "2032",
    type: "HSPU",
    desc: "O terror dos corredores de rua. Aerodinâmica perfeita e motor tunado para alcançar qualquer fugitivo.",
    image: "/images/vehicles/coquette.png",
    ranks: "HSPU Certified",
  },
  {
    id: 8,
    name: "DF8-GT",
    year: "2029",
    type: "Patrol Cruiser",
    desc: "Sedã clássico de patrulha. Confortável para turnos longos e com um motor V8 confiável.",
    image: "/images/vehicles/df8gt.png",
    ranks: "Deputy",
  },
  {
    id: 9,
    name: "Buffalo STX",
    year: "2031",
    type: "HSPU",
    desc: "Elegante e rápido. Usado pela equipe da HSPU para se misturar ao tráfego de Hive City antes de perseguir agressivamente os suspeitos e piscar LEDs bonitos.",
    image: "/images/vehicles/buffalo.png",
    ranks: "HSPU Certified",
  },
  {
    id: 10,
    name: "Overland",
    year: "2030",
    type: "Caminhonete",
    desc: "Caminhonete pesada para situações extremas. Praticamente um tanque de guerra com sirenes.",
    image: "/images/vehicles/overland.png",
    ranks: "Sergeant",
  },
  {
    id: 11,
    name: "PMP900",
    year: "2031",
    type: "Patrol Cruiser",
    desc: "Cruiser de luxo adaptado para a polícia. Usado principalmente por oficiais de alta patente.",
    image: "/images/vehicles/PMP900.png",
    ranks: "Deputy",
  },
  {
    id: 12,
    name: "Gauntlet Interceptor",
    year: "2032",
    type: "HSPU",
    desc: "Muscle car transformado em interceptador. Força bruta e som de motor intimidador.",
    image: "/images/vehicles/gauntletinterceptor.png",
    ranks: "HSPU Certified",
  },
  {
    id: 13,
    name: "Nightclaw",
    year: "2031",
    type: "Patrol Cruiser",
    desc: "Cruiser furtivo para patrulhas noturnas. Pintura fosca e luzes de emergência embutidas.",
    image: "/images/vehicles/nightclaw.png",
    ranks: "Senior Deputy",
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState<
    "officers" | "notices" | "vehicles" | "sop"
  >("officers");
  const [searchQuery, setSearchQuery] = useState("");
  const [rankFilter, setRankFilter] = useState("ALL");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const filteredOfficers = officers.filter((officer) => {
    const matchesSearch = officer.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRank = rankFilter === "ALL" || officer.rank === rankFilter;
    return matchesSearch && matchesRank;
  });

  const ranks = ["ALL", ...Array.from(new Set(officers.map((o) => o.rank)))];

  return (
    <div className="h-screen w-full flex flex-col pb-8 overflow-hidden relative">
      <div className="win95-window w-full h-full flex-1 flex flex-col relative z-10">
        <div className="win95-titlebar">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>NHSO Connect Legacy v4.2 - NHSO Terminal</span>
          </div>
          <div className="flex gap-1">
            <button className="win95-button !p-1">
              <Minus className="w-3 h-3" />
            </button>
            <button className="win95-button !p-1">
              <Square className="w-3 h-3" />
            </button>
            <button className="win95-button !p-1 font-bold">
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="flex gap-4 px-2 py-1 text-sm border-b border-[#111111] bg-[#2a2a2a]">
          <span className="cursor-pointer hover:bg-[#001a33] hover:text-white px-1">
            <span className="underline">F</span>ile
          </span>
          <span className="cursor-pointer hover:bg-[#001a33] hover:text-white px-1">
            <span className="underline">E</span>dit
          </span>
          <span className="cursor-pointer hover:bg-[#001a33] hover:text-white px-1">
            <span className="underline">V</span>iew
          </span>
          <span className="cursor-pointer hover:bg-[#001a33] hover:text-white px-1">
            <span className="underline">H</span>elp
          </span>
        </div>

        <div className="p-2 flex-1 flex flex-col min-h-0">
          <div className="flex px-2 pt-2">
            <button
              onClick={() => setActiveTab("officers")}
              className={`win95-tab ${activeTab === "officers" ? "active" : ""}`}
            >
              Officers.db
            </button>
            <button
              onClick={() => setActiveTab("notices")}
              className={`win95-tab ${activeTab === "notices" ? "active" : ""}`}
            >
              Notices.sys
            </button>
            <button
              onClick={() => setActiveTab("vehicles")}
              className={`win95-tab ${activeTab === "vehicles" ? "active" : ""}`}
            >
              Vehicle_Pool.dat
            </button>
            <button
              onClick={() => setActiveTab("sop")}
              className={`win95-tab ${activeTab === "sop" ? "active" : ""}`}
            >
              SOP.dat
            </button>
          </div>

          <div className="win95-tab-container flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              {activeTab === "officers" && (
                <motion.div
                  key="officers"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  className="space-y-4"
                >
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="flex items-center gap-2 flex-1">
                      <label className="text-sm font-bold">Search:</label>
                      <div className="win95-inset flex-1 flex items-center px-2 py-1">
                        <Search className="w-4 h-4 text-gray-400 mr-2" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full outline-none text-sm bg-transparent text-white"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-bold">Rank:</label>
                      <select
                        value={rankFilter}
                        onChange={(e) => setRankFilter(e.target.value)}
                        className="win95-inset px-2 py-1 text-sm outline-none bg-transparent text-white"
                      >
                        {ranks.map((rank) => (
                          <option key={rank} value={rank}>
                            {rank === "ALL" ? "All Ranks" : rank}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredOfficers.length > 0 ? (
                      filteredOfficers.map((officer) => (
                        <div
                          key={officer.id}
                          className="win95-window p-2 flex flex-col"
                        >
                          <div className="flex gap-4 mb-2">
                            <div className="win95-inset w-16 h-16 bg-[#111111] flex items-center justify-center shrink-0">
                              <User className="w-8 h-8 text-gray-500" />
                            </div>
                            <div className="flex-1">
                              <div className="font-bold text-lg">
                                {officer.name}
                              </div>
                              <div className="text-sm">{officer.rank}</div>
                              <div className="text-xs mt-1">
                                Badge: {officer.badge}
                              </div>
                            </div>
                          </div>
                          <div className="win95-inset !bg-black p-2 flex-1 font-mono text-sm terminal-text leading-tight">
                            &gt; STATUS: {officer.status}
                            <br />
                            &gt; BIO: {officer.bio}
                          </div>
                          <div className="mt-2 flex justify-end">
                            <button className="win95-button">
                              View Record
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full py-8 text-center win95-inset">
                        <p className="text-sm text-gray-400">No records found in database.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === "notices" && (
                <motion.div
                  key="notices"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {notices.map((notice) => (
                    <div key={notice.id} className="win95-window flex flex-col">
                      <div
                        className={`win95-titlebar ${notice.type === "WANTED" ? "!bg-red-800" : ""}`}
                      >
                        <div className="flex items-center gap-2">
                          {notice.type === "WANTED" ? (
                            <AlertTriangle className="w-4 h-4 text-yellow-400" />
                          ) : (
                            <FileText className="w-4 h-4" />
                          )}
                          <span>
                            {notice.type} - {notice.protocol}
                          </span>
                        </div>
                        <button className="win95-button !p-0.5">
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="p-3 flex-1 flex flex-col">
                        <div className="flex items-start gap-4 mb-2">
                          {notice.type === "WANTED" ? (
                            <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
                          ) : (
                            <BadgeInfo className="w-8 h-8 text-blue-600 shrink-0" />
                          )}
                          <div>
                            <h3 className="font-bold text-lg leading-tight">
                              {notice.title}
                            </h3>
                            <div className="text-xs text-gray-600 mt-1">
                              Issued: {notice.date}
                            </div>
                          </div>
                        </div>

                        <div className="win95-inset p-2 text-sm flex-1 mt-2">
                          {notice.type === "WANTED" ? (
                            <div className="space-y-1">
                              <div>
                                <strong>Crime:</strong> {notice.crime}
                              </div>
                              <div>
                                <strong>Reward:</strong>{" "}
                                <span className="text-red-600 font-bold">
                                  {notice.reward}
                                </span>
                              </div>
                              <div>
                                <strong>Danger:</strong> {notice.danger}
                              </div>
                            </div>
                          ) : (
                            <p>{notice.desc}</p>
                          )}
                        </div>
                        <div className="mt-3 flex justify-center gap-2">
                          <button className="win95-button">Acknowledge</button>
                          <button className="win95-button">Print</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "vehicles" && (
                <motion.div
                  key="vehicles"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {vehicles.map((vehicle) => (
                    <div
                      key={vehicle.id}
                      className="win95-window p-2 flex flex-col"
                    >
                      <div className="win95-inset h-48 relative mb-2 !bg-black">
                        <Image
                          src={vehicle.image}
                          alt={vehicle.name}
                          fill
                          className="object-cover opacity-80 grayscale contrast-125"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="font-bold text-lg">
                        {vehicle.name} ({vehicle.year})
                      </div>
                      <div className="text-sm font-bold text-gray-400 mb-2">
                        {vehicle.type}
                      </div>
                      <div className="win95-inset !bg-black p-2 flex-1 font-mono text-sm terminal-text leading-tight">
                        &gt; DESC: {vehicle.desc}
                        <br />
                        &gt; RANKS: {vehicle.ranks}
                        <br />
                        &gt; STATUS: OPERACIONAL
                      </div>
                      <div className="mt-2 flex justify-end">
                        <button className="win95-button">Dispatch</button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "sop" && (
                <motion.div
                  key="sop"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="h-full flex items-center justify-center p-4 relative"
                >
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

                  <div className="win95-window max-w-2xl w-full p-1 bg-[#2a2a2a] shadow-[15px_15px_0px_rgba(0,0,0,0.7)] relative z-10 !border-red-900">
                    <div className="win95-window p-6 bg-[#2a2a2a] relative">
                      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-red-900 to-red-700 flex items-center px-4 border-b-2 border-red-950 shadow-sm">
                        <span className="text-white font-bold tracking-widest drop-shadow-md">CRITICAL ERROR - FILE NOT FOUND</span>
                      </div>
                      <div className="mt-8 flex flex-col items-center text-center">
                        <div className="relative mb-6">
                          <AlertTriangle className="w-24 h-24 text-red-600 animate-pulse relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
                          <div className="absolute inset-0 bg-red-600 blur-xl opacity-20"></div>
                        </div>
                        <h2 className="text-3xl font-bold text-red-500 mb-4 drop-shadow-lg">SOP.dat CORROMPIDO</h2>
                        <div className="win95-inset !bg-[#050505] p-6 w-full text-left font-mono text-[#ff3333] text-lg leading-relaxed shadow-[inset_4px_4px_#000000,inset_-2px_-2px_#2a2a2a] border border-[#111]">
                          <p className="mb-4 drop-shadow-[0_0_2px_rgba(255,51,51,0.4)]">&gt; O arquivo que continha o SOP da NHSO foi perdido há muito tempo, e ninguém quer reescrever.</p>
                          <p className="mb-4 drop-shadow-[0_0_2px_rgba(255,51,51,0.4)]">&gt; Se tiverem dúvidas, usem o SOP da HCPD.</p>
                          <p className="mb-8 drop-shadow-[0_0_2px_rgba(255,51,51,0.4)]">&gt; Mas caso não saibam ler... só não passem do ponto.</p>
                          <p className="text-right italic text-gray-500">Ass: Undersheriff Graves</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-2 win95-inset bg-[#2a2a2a] px-2 py-1 text-xs flex justify-between">
            <span>Status: Connected to Server 04</span>
            <span>
              Records: {officers.length + notices.length + vehicles.length}
            </span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-8 win95-window !border-b-0 !border-l-0 !border-r-0 flex items-center justify-between px-1 z-50">
        <div className="flex items-center gap-1">
          <button className="win95-button font-bold flex items-center gap-1 !py-1">
            <Shield className="w-4 h-4 text-[#e0e0e0] fill-[#e0e0e0]" />
            Start
          </button>
          <div className="w-px h-6 bg-[#111111] mx-1 border-r border-[#4a4a4a]"></div>
          <button className="win95-button !py-1 !bg-[#1a1a1a] !shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#3a3a3a]">
            NHSO_DB.exe
          </button>
        </div>
        <div className="win95-inset px-2 py-0.5 text-xs flex items-center gap-2 bg-[#2a2a2a]">
          <Shield className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          {time}
        </div>
      </div>
    </div>
  );
}
