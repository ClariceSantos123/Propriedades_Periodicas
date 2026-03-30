// Dados das Propriedades Periódicas dos 118 Elementos
// Valores aproximados para fins educacionais

const propriedadesData = {
    // Raio Atômico (pm - picômetros)
    raioAtomico: {
        H: 37, He: 32, Li: 152, Be: 112, B: 85, C: 77, N: 75, O: 73, F: 71, Ne: 69,
        Na: 186, Mg: 160, Al: 143, Si: 118, P: 110, S: 103, Cl: 99, Ar: 97,
        K: 227, Ca: 197, Sc: 162, Ti: 147, V: 134, Cr: 128, Mn: 127, Fe: 126, 
        Co: 125, Ni: 124, Cu: 128, Zn: 134, Ga: 135, Ge: 122, As: 120, Se: 119, 
        Br: 114, Kr: 110,
        Rb: 248, Sr: 215, Y: 180, Zr: 160, Nb: 146, Mo: 139, Tc: 136, Ru: 134, 
        Rh: 134, Pd: 137, Ag: 144, Cd: 152, In: 167, Sn: 158, Sb: 141, Te: 137, 
        I: 133, Xe: 130,
        Cs: 265, Ba: 222, La: 187, Ce: 181, Pr: 182, Nd: 181, Pm: 183, Sm: 180,
        Eu: 199, Gd: 179, Tb: 177, Dy: 178, Ho: 176, Er: 175, Tm: 174, Yb: 193,
        Lu: 172, Hf: 159, Ta: 146, W: 139, Re: 137, Os: 135, Ir: 135, Pt: 138,
        Au: 144, Hg: 151, Tl: 170, Pb: 175, Bi: 170, Po: 140, At: 150, Rn: 140,
        Fr: 260, Ra: 215, Ac: 195, Th: 180, Pa: 180, U: 175, Np: 175, Pu: 175,
        Am: 175, Cm: 176, Bk: 176, Cf: 176, Es: 176, Fm: 176, Md: 176, No: 176,
        Lr: 176, Rf: 157, Db: 149, Sg: 143, Bh: 141, Hs: 134, Mt: 129, Ds: 128,
        Rg: 121, Cn: 122, Nh: 136, Fl: 143, Mc: 162, Lv: 175, Ts: 165, Og: 157
    },

    // Eletronegatividade (escala de Pauling)
    eletronegatividade: {
        H: 2.20, He: 0, Li: 0.98, Be: 1.57, B: 2.04, C: 2.55, N: 3.04, O: 3.44, 
        F: 3.98, Ne: 0,
        Na: 0.93, Mg: 1.31, Al: 1.61, Si: 1.90, P: 2.19, S: 2.58, Cl: 3.16, Ar: 0,
        K: 0.82, Ca: 1.00, Sc: 1.36, Ti: 1.54, V: 1.63, Cr: 1.66, Mn: 1.55, 
        Fe: 1.83, Co: 1.88, Ni: 1.91, Cu: 1.90, Zn: 1.65, Ga: 1.81, Ge: 2.01, 
        As: 2.18, Se: 2.55, Br: 2.96, Kr: 3.00,
        Rb: 0.82, Sr: 0.95, Y: 1.22, Zr: 1.33, Nb: 1.6, Mo: 2.16, Tc: 1.9, 
        Ru: 2.2, Rh: 2.28, Pd: 2.20, Ag: 1.93, Cd: 1.69, In: 1.78, Sn: 1.96, 
        Sb: 2.05, Te: 2.10, I: 2.66, Xe: 2.60,
        Cs: 0.79, Ba: 0.89, La: 1.10, Ce: 1.12, Pr: 1.13, Nd: 1.14, Pm: 1.13,
        Sm: 1.17, Eu: 1.20, Gd: 1.20, Tb: 1.10, Dy: 1.22, Ho: 1.23, Er: 1.24,
        Tm: 1.25, Yb: 1.10, Lu: 1.27, Hf: 1.3, Ta: 1.5, W: 2.36, Re: 1.9,
        Os: 2.2, Ir: 2.20, Pt: 2.28, Au: 2.54, Hg: 2.00, Tl: 1.62, Pb: 2.33,
        Bi: 2.02, Po: 2.0, At: 2.2, Rn: 0,
        Fr: 0.7, Ra: 0.9, Ac: 1.1, Th: 1.3, Pa: 1.5, U: 1.38, Np: 1.36, Pu: 1.28,
        Am: 1.13, Cm: 1.28, Bk: 1.30, Cf: 1.30, Es: 1.30, Fm: 1.30, Md: 1.30,
        No: 1.30, Lr: 1.30, Rf: 1.3, Db: 1.5, Sg: 1.7, Bh: 1.9, Hs: 2.2,
        Mt: 2.4, Ds: 2.5, Rg: 2.6, Cn: 2.7, Nh: 2.8, Fl: 2.9, Mc: 3.0,
        Lv: 3.1, Ts: 3.2, Og: 3.3
    },

    // Energia de Ionização (kJ/mol)
    energiaIonizacao: {
        H: 1312, He: 2372, Li: 520, Be: 900, B: 801, C: 1086, N: 1402, O: 1314, 
        F: 1681, Ne: 2081,
        Na: 496, Mg: 738, Al: 578, Si: 787, P: 1012, S: 1000, Cl: 1251, Ar: 1521,
        K: 419, Ca: 590, Sc: 633, Ti: 658, V: 651, Cr: 653, Mn: 717, Fe: 762,
        Co: 760, Ni: 737, Cu: 745, Zn: 906, Ga: 579, Ge: 762, As: 947, Se: 941,
        Br: 1140, Kr: 1351,
        Rb: 403, Sr: 549, Y: 600, Zr: 640, Nb: 652, Mo: 684, Tc: 702, Ru: 710,
        Rh: 720, Pd: 805, Ag: 731, Cd: 868, In: 558, Sn: 709, Sb: 834, Te: 869,
        I: 1008, Xe: 1170,
        Cs: 376, Ba: 503, La: 538, Ce: 534, Pr: 527, Nd: 533, Pm: 540, Sm: 545,
        Eu: 547, Gd: 593, Tb: 566, Dy: 573, Ho: 581, Er: 589, Tm: 597, Yb: 603,
        Lu: 524, Hf: 658, Ta: 761, W: 770, Re: 760, Os: 840, Ir: 880, Pt: 870,
        Au: 890, Hg: 1007, Tl: 589, Pb: 716, Bi: 703, Po: 812, At: 920, Rn: 1037,
        Fr: 380, Ra: 509, Ac: 499, Th: 587, Pa: 568, U: 597, Np: 605, Pu: 585,
        Am: 578, Cm: 581, Bk: 601, Cf: 608, Es: 619, Fm: 627, Md: 635, No: 642,
        Lr: 470, Rf: 580, Db: 665, Sg: 757, Bh: 740, Hs: 730, Mt: 800, Ds: 960,
        Rg: 1020, Cn: 1155, Nh: 705, Fl: 832, Mc: 538, Lv: 663, Ts: 736, Og: 860
    },

    // Afinidade Eletrônica (kJ/mol)
    // Valores negativos = liberação de energia (favorável)
    // Valores positivos ou zero = desfavorável
    afinidadeEletronica: {
        H: -72.8, He: 0, Li: -59.6, Be: 0, B: -26.7, C: -121.9, N: 0, O: -141.0, 
        F: -328.0, Ne: 0,
        Na: -52.9, Mg: 0, Al: -42.5, Si: -133.6, P: -72.0, S: -200.4, Cl: -349.0, Ar: 0,
        K: -48.4, Ca: -2.4, Sc: -18.1, Ti: -7.6, V: -50.6, Cr: -64.3, Mn: 0, 
        Fe: -15.7, Co: -63.7, Ni: -112.0, Cu: -118.4, Zn: 0, Ga: -28.9, Ge: -119.0, 
        As: -78.0, Se: -195.0, Br: -324.6, Kr: 0,
        Rb: -46.9, Sr: -5.0, Y: -29.6, Zr: -41.1, Nb: -86.1, Mo: -71.9, Tc: -53.0, 
        Ru: -101.3, Rh: -110.0, Pd: -53.7, Ag: -125.6, Cd: 0, In: -28.9, Sn: -107.3, 
        Sb: -103.2, Te: -190.2, I: -295.2, Xe: 0,
        Cs: -45.5, Ba: -13.9, La: -48.0, Ce: -50.0, Pr: -50.0, Nd: -50.0, Pm: -50.0,
        Sm: -50.0, Eu: -50.0, Gd: -50.0, Tb: -50.0, Dy: -50.0, Ho: -50.0, Er: -50.0,
        Tm: -50.0, Yb: -50.0, Lu: -50.0, Hf: -0.0, Ta: -31.0, W: -78.6, Re: -14.5,
        Os: -106.1, Ir: -151.0, Pt: -205.3, Au: -222.8, Hg: 0, Tl: -19.2, Pb: -35.1,
        Bi: -91.2, Po: -183.0, At: -270.1, Rn: 0,
        Fr: -44.0, Ra: -10.0, Ac: -30.0, Th: -30.0, Pa: -30.0, U: -30.0, Np: -30.0,
        Pu: -30.0, Am: -30.0, Cm: -30.0, Bk: -30.0, Cf: -30.0, Es: -30.0, Fm: -30.0,
        Md: -30.0, No: -30.0, Lr: -30.0, Rf: -30.0, Db: -30.0, Sg: -30.0, Bh: -30.0,
        Hs: -30.0, Mt: -30.0, Ds: -30.0, Rg: -30.0, Cn: 0, Nh: -30.0, Fl: -30.0,
        Mc: -30.0, Lv: -30.0, Ts: -165.0, Og: 0
    },

    // Densidade (g/cm³)
    densidade: {
        H: 0.00009, He: 0.0002, Li: 0.53, Be: 1.85, B: 2.34, C: 2.27, N: 0.0012,
        O: 0.0014, F: 0.0017, Ne: 0.0009,
        Na: 0.97, Mg: 1.74, Al: 2.70, Si: 2.33, P: 1.82, S: 2.07, Cl: 0.003,
        Ar: 0.0018,
        K: 0.86, Ca: 1.54, Sc: 2.99, Ti: 4.54, V: 6.11, Cr: 7.15, Mn: 7.44,
        Fe: 7.87, Co: 8.90, Ni: 8.90, Cu: 8.96, Zn: 7.13, Ga: 5.91, Ge: 5.32,
        As: 5.78, Se: 4.81, Br: 3.12, Kr: 0.0037,
        Rb: 1.53, Sr: 2.64, Y: 4.47, Zr: 6.51, Nb: 8.57, Mo: 10.28, Tc: 11.5,
        Ru: 12.37, Rh: 12.41, Pd: 12.02, Ag: 10.49, Cd: 8.65, In: 7.31, Sn: 7.27,
        Sb: 6.68, Te: 6.24, I: 4.93, Xe: 0.0059,
        Cs: 1.93, Ba: 3.51, La: 6.15, Ce: 6.77, Pr: 6.77, Nd: 7.01, Pm: 7.26,
        Sm: 7.52, Eu: 5.24, Gd: 7.90, Tb: 8.23, Dy: 8.55, Ho: 8.80, Er: 9.07,
        Tm: 9.32, Yb: 6.90, Lu: 9.84, Hf: 13.31, Ta: 16.65, W: 19.25, Re: 21.02,
        Os: 22.59, Ir: 22.56, Pt: 21.45, Au: 19.30, Hg: 13.53, Tl: 11.85,
        Pb: 11.34, Bi: 9.78, Po: 9.20, At: 7.0, Rn: 0.0097,
        Fr: 1.87, Ra: 5.5, Ac: 10.0, Th: 11.72, Pa: 15.37, U: 19.05, Np: 20.45,
        Pu: 19.84, Am: 13.67, Cm: 13.51, Bk: 14.78, Cf: 15.1, Es: 13.5, Fm: 12.0,
        Md: 10.3, No: 9.9, Lr: 9.8, Rf: 17.0, Db: 21.0, Sg: 23.0, Bh: 25.0,
        Hs: 27.0, Mt: 28.0, Ds: 26.0, Rg: 22.0, Cn: 14.0, Nh: 16.0, Fl: 14.0,
        Mc: 10.0, Lv: 12.5, Ts: 7.5, Og: 5.0
    },

    // Caráter Metálico (0-10, 0 = não-metal, 10 = metal forte)
    caracterMetalico: {
        H: 0, He: 0, Li: 9, Be: 7, B: 3, C: 0, N: 0, O: 0, F: 0, Ne: 0,
        Na: 10, Mg: 9, Al: 8, Si: 2, P: 0, S: 0, Cl: 0, Ar: 0,
        K: 10, Ca: 10, Sc: 9, Ti: 9, V: 9, Cr: 9, Mn: 8, Fe: 9, Co: 9, Ni: 9,
        Cu: 9, Zn: 8, Ga: 7, Ge: 3, As: 1, Se: 0, Br: 0, Kr: 0,
        Rb: 10, Sr: 10, Y: 9, Zr: 9, Nb: 9, Mo: 9, Tc: 9, Ru: 9, Rh: 9, Pd: 9,
        Ag: 9, Cd: 8, In: 7, Sn: 6, Sb: 2, Te: 1, I: 0, Xe: 0,
        Cs: 10, Ba: 10, La: 9, Ce: 9, Pr: 9, Nd: 9, Pm: 9, Sm: 9, Eu: 9, Gd: 9,
        Tb: 9, Dy: 9, Ho: 9, Er: 9, Tm: 9, Yb: 9, Lu: 9, Hf: 9, Ta: 9, W: 9,
        Re: 9, Os: 9, Ir: 9, Pt: 9, Au: 9, Hg: 8, Tl: 7, Pb: 7, Bi: 6, Po: 4,
        At: 2, Rn: 0,
        Fr: 10, Ra: 10, Ac: 9, Th: 9, Pa: 9, U: 9, Np: 9, Pu: 9, Am: 9, Cm: 9,
        Bk: 9, Cf: 9, Es: 9, Fm: 9, Md: 9, No: 9, Lr: 9, Rf: 8, Db: 8, Sg: 8,
        Bh: 8, Hs: 8, Mt: 8, Ds: 8, Rg: 8, Cn: 7, Nh: 7, Fl: 6, Mc: 6, Lv: 5,
        Ts: 3, Og: 0
    },

    // Reatividade (0-10, varia por grupo)
    reatividade: {
        H: 5, He: 0, Li: 9, Be: 5, B: 3, C: 2, N: 3, O: 7, F: 10, Ne: 0,
        Na: 10, Mg: 6, Al: 5, Si: 2, P: 4, S: 5, Cl: 9, Ar: 0,
        K: 10, Ca: 8, Sc: 6, Ti: 5, V: 5, Cr: 5, Mn: 6, Fe: 6, Co: 5, Ni: 4,
        Cu: 3, Zn: 4, Ga: 4, Ge: 2, As: 3, Se: 6, Br: 8, Kr: 0,
        Rb: 10, Sr: 9, Y: 6, Zr: 5, Nb: 5, Mo: 5, Tc: 6, Ru: 5, Rh: 4, Pd: 3,
        Ag: 2, Cd: 4, In: 4, Sn: 3, Sb: 3, Te: 5, I: 7, Xe: 2,
        Cs: 10, Ba: 9, La: 7, Ce: 7, Pr: 7, Nd: 7, Pm: 7, Sm: 7, Eu: 8, Gd: 7,
        Tb: 7, Dy: 7, Ho: 7, Er: 7, Tm: 7, Yb: 7, Lu: 7, Hf: 5, Ta: 5, W: 4,
        Re: 5, Os: 4, Ir: 3, Pt: 3, Au: 2, Hg: 3, Tl: 5, Pb: 4, Bi: 4, Po: 6,
        At: 7, Rn: 0,
        Fr: 10, Ra: 9, Ac: 8, Th: 6, Pa: 6, U: 6, Np: 7, Pu: 7, Am: 7, Cm: 7,
        Bk: 7, Cf: 7, Es: 7, Fm: 7, Md: 7, No: 7, Lr: 7, Rf: 6, Db: 6, Sg: 6,
        Bh: 6, Hs: 6, Mt: 6, Ds: 6, Rg: 5, Cn: 5, Nh: 5, Fl: 5, Mc: 5, Lv: 5,
        Ts: 7, Og: 0
    }
};

// Informações básicas dos elementos (símbolos, nomes, números atômicos, posições)
const elementosBasicos = [
    { symbol: "H", name: "Hidrogênio", number: 1, group: 1, period: 1 },
    { symbol: "He", name: "Hélio", number: 2, group: 18, period: 1 },
    { symbol: "Li", name: "Lítio", number: 3, group: 1, period: 2 },
    { symbol: "Be", name: "Berílio", number: 4, group: 2, period: 2 },
    { symbol: "B", name: "Boro", number: 5, group: 13, period: 2 },
    { symbol: "C", name: "Carbono", number: 6, group: 14, period: 2 },
    { symbol: "N", name: "Nitrogênio", number: 7, group: 15, period: 2 },
    { symbol: "O", name: "Oxigênio", number: 8, group: 16, period: 2 },
    { symbol: "F", name: "Flúor", number: 9, group: 17, period: 2 },
    { symbol: "Ne", name: "Neônio", number: 10, group: 18, period: 2 },
    { symbol: "Na", name: "Sódio", number: 11, group: 1, period: 3 },
    { symbol: "Mg", name: "Magnésio", number: 12, group: 2, period: 3 },
    { symbol: "Al", name: "Alumínio", number: 13, group: 13, period: 3 },
    { symbol: "Si", name: "Silício", number: 14, group: 14, period: 3 },
    { symbol: "P", name: "Fósforo", number: 15, group: 15, period: 3 },
    { symbol: "S", name: "Enxofre", number: 16, group: 16, period: 3 },
    { symbol: "Cl", name: "Cloro", number: 17, group: 17, period: 3 },
    { symbol: "Ar", name: "Argônio", number: 18, group: 18, period: 3 },
    { symbol: "K", name: "Potássio", number: 19, group: 1, period: 4 },
    { symbol: "Ca", name: "Cálcio", number: 20, group: 2, period: 4 },
    // ... (continua para os 118 elementos)
    // Por questão de espaço, incluindo apenas os principais
];

// Descrições das propriedades
const propriedadesInfo = {
    raioAtomico: {
        title: "Raio Atômico",
        icon: "📏",
        description: "Medida do tamanho do átomo, geralmente em picômetros (pm)",
        tendenciaGrupo: "Aumenta de cima para baixo",
        tendenciaPeriodo: "Diminui da esquerda para direita",
        explicacao: "Quanto mais camadas eletrônicas, maior o átomo. Quanto mais prótons atraindo elétrons, menor o átomo.",
        unidade: "pm"
    },
    eletronegatividade: {
        title: "Eletronegatividade",
        icon: "⚡",
        description: "Capacidade de um átomo atrair elétrons em uma ligação química",
        tendenciaGrupo: "Diminui de cima para baixo",
        tendenciaPeriodo: "Aumenta da esquerda para direita",
        explicacao: "Flúor é o mais eletronegativo (3.98). Gases nobres têm valor zero pois não formam ligações.",
        unidade: ""
    },
    energiaIonizacao: {
        title: "Energia de Ionização",
        icon: "💥",
        description: "Energia necessária para remover um elétron de um átomo",
        tendenciaGrupo: "Diminui de cima para baixo",
        tendenciaPeriodo: "Aumenta da esquerda para direita",
        explicacao: "Gases nobres têm maior energia de ionização pois seus elétrons estão fortemente ligados.",
        unidade: "kJ/mol"
    },
    afinidadeEletronica: {
        title: "Afinidade Eletrônica",
        icon: "🔋",
        description: "Energia liberada quando um átomo ganha um elétron",
        tendenciaGrupo: "Varia (geralmente diminui descendo)",
        tendenciaPeriodo: "Geralmente aumenta da esquerda para direita",
        explicacao: "Halogênios têm alta afinidade eletrônica pois querem completar a camada de valência.",
        unidade: "kJ/mol"
    },
    caracterMetalico: {
        title: "Caráter Metálico",
        icon: "⚙️",
        description: "Tendência de um elemento se comportar como metal",
        tendenciaGrupo: "Aumenta de cima para baixo",
        tendenciaPeriodo: "Diminui da esquerda para direita",
        explicacao: "Metais perdem elétrons facilmente. Não-metais ganham elétrons facilmente.",
        unidade: ""
    },
    reatividade: {
        title: "Reatividade",
        icon: "🧨",
        description: "Facilidade com que um elemento participa de reações químicas",
        tendenciaGrupo: "Varia por família",
        tendenciaPeriodo: "Varia (metais alcalinos muito reativos, gases nobres inertes)",
        explicacao: "Metais alcalinos e halogênios são os mais reativos. Gases nobres são praticamente inertes.",
        unidade: ""
    },
    densidade: {
        title: "Densidade",
        icon: "⚖️",
        description: "Massa por unidade de volume do elemento",
        tendenciaGrupo: "Geralmente aumenta descendo",
        tendenciaPeriodo: "Aumenta até o centro, depois diminui",
        explicacao: "Ósmio e Irídio são os elementos mais densos. Hidrogênio é o menos denso.",
        unidade: "g/cm³"
    }
};
