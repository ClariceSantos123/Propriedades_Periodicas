# 🔧 GUIA DE TROUBLESHOOTING

## ❌ PROBLEMA: "Ao clicar na propriedade não abre nada"

### ✅ SOLUÇÕES PASSO A PASSO

---

## PASSO 1: Verificar se TODOS os arquivos estão no mesmo diretório

Você deve ter **EXATAMENTE** estes arquivos na mesma pasta:

```
📁 tabela-propriedades/
├── index.html          ✅ DEVE TER
├── styles.css          ✅ DEVE TER
├── propriedades-data.js ✅ DEVE TER
├── desafios.js         ✅ DEVE TER
├── visualizacoes.js    ✅ DEVE TER
└── app.js              ✅ DEVE TER (MAIS IMPORTANTE!)
```

**SE FALTAR ALGUM:** Baixe novamente todos os arquivos!

---

## PASSO 2: Abrir o Console do Navegador

1. Abra `index.html` no navegador
2. Pressione **F12** (ou **Ctrl+Shift+I**)
3. Vá na aba **Console**
4. Procure por erros (textos em vermelho)

### ✅ O QUE VOCÊ DEVE VER (sem erros):

```
📚 App.js carregado!
🔬 Propriedades disponíveis: (7) ['raioAtomico', 'eletronegatividade', ...]
🚀 Sistema iniciando...
📊 Progresso carregado: {...}
🎴 Inicializando 7 cards de propriedades
  Card 1: raioAtomico
  Card 2: eletronegatividade
  Card 3: energiaIonizacao
  Card 4: afinidadeEletronica
  Card 5: caracterMetalico
  Card 6: reatividade
  Card 7: densidade
✅ Todos os cards inicializados!
✅ Sistema pronto!
```

### ❌ ERROS COMUNS:

#### **ERRO 1: "Failed to load resource: net::ERR_FILE_NOT_FOUND"**

**Aparece:**
```
GET file:///C:/Users/.../app.js net::ERR_FILE_NOT_FOUND
```

**CAUSA:** Arquivo `app.js` (ou outro) não está na pasta

**SOLUÇÃO:**
1. Verifique se TODOS os 6 arquivos estão na mesma pasta
2. Baixe novamente os arquivos que faltam

---

#### **ERRO 2: "propriedadesInfo is not defined"**

**Aparece:**
```
Uncaught ReferenceError: propriedadesInfo is not defined
```

**CAUSA:** Arquivo `propriedades-data.js` não foi carregado

**SOLUÇÃO:**
1. Verifique se `propriedades-data.js` existe
2. Verifique a ordem no HTML:
   ```html
   <script src="propriedades-data.js"></script>  ← DEVE vir PRIMEIRO
   <script src="desafios.js"></script>
   <script src="visualizacoes.js"></script>
   <script src="app.js"></script>                ← DEVE vir POR ÚLTIMO
   ```

---

#### **ERRO 3: "Nenhum card encontrado"**

**Aparece no console:**
```
❌ NENHUM CARD ENCONTRADO! Verifique se o HTML tem elements com classe .property-card
```

**CAUSA:** HTML não tem os cards de propriedades

**SOLUÇÃO:**
1. Verifique se `index.html` está correto
2. Procure por `<div class="property-card"` no HTML
3. Deve ter 7 desses elementos

---

## PASSO 3: Testar o Click Manualmente

1. Abra o Console (F12)
2. Digite este comando:
   ```javascript
   exploreProperty('raioAtomico')
   ```
3. Pressione ENTER

### ✅ SE FUNCIONAR:

Você verá a tela mudar e vários logs no console:
```
🎯 === EXPLORANDO PROPRIEDADE ===
Nome da propriedade: raioAtomico
✅ Info da propriedade: Raio Atômico
📊 Criando mapa de calor...
🎮 Criando lista de desafios...
📺 Mostrando tela de exploração...
✅ === EXPLORAÇÃO COMPLETA ===
```

**PROBLEMA:** Os event listeners não estão funcionando
**SOLUÇÃO:** Veja PASSO 4

### ❌ SE NÃO FUNCIONAR:

Você verá um erro vermelho no console
→ Veja a mensagem de erro e procure acima neste guia

---

## PASSO 4: Verificar Event Listeners

1. Abra o Console (F12)
2. Clique em um card de propriedade (ex: Raio Atômico)
3. Veja o console

### ✅ DEVE APARECER:

```
🔬 CARD CLICADO! Explorando propriedade: raioAtomico
🎯 === EXPLORANDO PROPRIEDADE ===
...
```

### ❌ SE NÃO APARECER NADA:

**CAUSA:** JavaScript não inicializou os event listeners

**SOLUÇÃO:**
1. Verifique se apareceu "✅ Sistema pronto!" no console
2. Se não apareceu, recarregue a página (F5)
3. Se ainda não funcionar, verifique se `app.js` está correto

---

## PASSO 5: Testar em Servidor Local (RECOMENDADO!)

Alguns navegadores bloqueiam JavaScript quando aberto direto do disco.

### **Opção A: Python (SE TIVER INSTALADO)**

```bash
# No terminal, dentro da pasta tabela-propriedades:
python -m http.server 8000

# Depois abra no navegador:
http://localhost:8000
```

### **Opção B: VS Code Live Server**

1. Instale extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Escolha "Open with Live Server"

### **Opção C: Node.js (SE TIVER INSTALADO)**

```bash
npx http-server -p 8000

# Depois abra:
http://localhost:8000
```

---

## PASSO 6: Verificar Navegador

**NAVEGADORES RECOMENDADOS:**
- ✅ Google Chrome (melhor)
- ✅ Microsoft Edge
- ✅ Firefox
- ⚠️ Safari (pode ter problemas)
- ❌ Internet Explorer (NÃO suportado)

**VERSÃO:** Use versão atualizada (2023+)

---

## PASSO 7: Desabilitar Extensões

Algumas extensões bloqueiam JavaScript:

1. Abra no modo anônimo (Ctrl+Shift+N)
2. Teste novamente
3. Se funcionar → problema é extensão

---

## TESTE RÁPIDO (1 MINUTO)

Cole este código completo no Console e pressione ENTER:

```javascript
// Teste rápido de diagnóstico
console.log('=== DIAGNÓSTICO RÁPIDO ===');
console.log('1. propriedadesInfo existe?', typeof propriedadesInfo !== 'undefined');
console.log('2. propriedadesData existe?', typeof propriedadesData !== 'undefined');
console.log('3. appState existe?', typeof appState !== 'undefined');
console.log('4. Cards encontrados:', document.querySelectorAll('.property-card').length);
console.log('5. Tela menu ativa?', document.getElementById('menuScreen').classList.contains('active'));
console.log('=== FIM DIAGNÓSTICO ===');

// Tentar abrir manualmente
if (typeof exploreProperty === 'function') {
    console.log('✅ Tentando abrir Raio Atômico...');
    exploreProperty('raioAtomico');
} else {
    console.error('❌ Função exploreProperty não existe!');
}
```

### RESULTADO ESPERADO:

```
=== DIAGNÓSTICO RÁPIDO ===
1. propriedadesInfo existe? true
2. propriedadesData existe? true
3. appState existe? true
4. Cards encontrados: 7
5. Tela menu ativa? true
=== FIM DIAGNÓSTICO ===
✅ Tentando abrir Raio Atômico...
🎯 === EXPLORANDO PROPRIEDADE ===
...
```

Se aparecer `false` em algum item → problema encontrado!

---

## AINDA NÃO FUNCIONA?

### 📸 Me envie SCREENSHOT do console mostrando:
1. Todos os logs (do início)
2. Qualquer mensagem de erro (em vermelho)
3. Resultado do TESTE RÁPIDO acima

---

## ✅ CHECKLIST FINAL

Antes de desistir, confirme:

- [ ] Todos os 6 arquivos estão na mesma pasta
- [ ] Abriu o arquivo `index.html` correto
- [ ] Console não mostra erros vermelhos
- [ ] Navegador é Chrome/Edge/Firefox atualizado
- [ ] Testou em modo anônimo (sem extensões)
- [ ] Testou com servidor local (Python/Live Server)
- [ ] Rodou o TESTE RÁPIDO e viu os resultados

---

**SE TODOS OS ITENS ESTÃO ✅ e ainda não funciona:**

Pode haver algum problema específico do seu sistema.

Me envie:
1. Screenshot do console
2. Qual navegador/versão
3. Sistema operacional (Windows/Mac/Linux)

**Vou te ajudar a resolver!** 🚀
