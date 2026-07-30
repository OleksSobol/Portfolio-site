---
layout: default
title: "Developer Tools Playground"
permalink: /playground/
---

<div style="margin-bottom: 2rem;">
  <h1 class="md-hero-title">Developer Tools Playground</h1>
  <p class="md-hero-sub">Client-side interactive tools for API testing, JSON manipulation, network subnet calculations, and UUID generation.</p>
</div>

<style>
  .pg-tabs {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--md-sys-color-outline);
  }
  .pg-tab-btn {
    padding: 0.6rem 1.25rem;
    border-radius: 9999px;
    background: var(--md-sys-color-surface-container);
    color: var(--md-sys-color-on-surface-variant);
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid var(--md-sys-color-outline);
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
  }
  .pg-tab-btn.active {
    background: var(--md-sys-color-primary-container);
    color: var(--md-sys-color-on-primary-container);
    border-color: var(--md-sys-color-primary);
  }
  .pg-tab-content {
    display: none;
  }
  .pg-tab-content.active {
    display: block;
  }
  .pg-output {
    margin-top: 1.5rem;
    padding: 1.25rem;
    border-radius: 12px;
    font-family: var(--md-font-mono);
    font-size: 0.875rem;
    white-space: pre-wrap;
    word-break: break-word;
    background: var(--md-sys-color-code-bg);
    border: 1px solid var(--md-sys-color-outline);
  }
  .pg-output.success {
    border-color: var(--md-sys-color-secondary);
    color: var(--md-sys-color-secondary);
  }
  .pg-output.error {
    border-color: var(--md-sys-color-tertiary);
    color: var(--md-sys-color-tertiary);
  }
</style>

<div class="pg-tabs">
  <button class="pg-tab-btn active" onclick="switchPgTab('api-tester')"><i class="fas fa-network-wired"></i> API Tester</button>
  <button class="pg-tab-btn" onclick="switchPgTab('json-formatter')"><i class="fas fa-code"></i> JSON Formatter</button>
  <button class="pg-tab-btn" onclick="switchPgTab('base64')"><i class="fas fa-lock"></i> Base64 Tool</button>
  <button class="pg-tab-btn" onclick="switchPgTab('subnet-calc')"><i class="fas fa-calculator"></i> Subnet Calculator</button>
  <button class="pg-tab-btn" onclick="switchPgTab('uuid-gen')"><i class="fas fa-key"></i> UUID Generator</button>
</div>

<!-- API Tester -->
<div id="api-tester" class="pg-tab-content active">
  <div class="md-tool-card">
    <h2 style="margin-bottom: 0.5rem;"><i class="fas fa-network-wired" style="color: var(--md-sys-color-primary);"></i> REST API Tester</h2>
    <p style="margin-bottom: 1.5rem;">Test HTTP endpoints with custom headers & payload right from your browser.</p>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
      <select id="apiMethod" class="md-select" style="width: 120px;">
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input type="text" id="apiUrl" class="md-input" style="flex: 1;" placeholder="https://jsonplaceholder.typicode.com/todos/1" value="https://jsonplaceholder.typicode.com/todos/1">
    </div>

    <div style="margin-bottom: 1rem;">
      <label style="display: block; font-size: 0.85rem; margin-bottom: 0.25rem; color: var(--md-sys-color-on-surface-variant);">Headers (JSON format)</label>
      <textarea id="apiHeaders" class="md-textarea" rows="2" placeholder='{"Content-Type": "application/json"}'></textarea>
    </div>

    <div id="apiBodyGroup" style="display: none; margin-bottom: 1rem;">
      <label style="display: block; font-size: 0.85rem; margin-bottom: 0.25rem; color: var(--md-sys-color-on-surface-variant);">Request Body (JSON)</label>
      <textarea id="apiBody" class="md-textarea" rows="3" placeholder='{"title": "Test", "completed": false}'></textarea>
    </div>

    <div style="display: flex; gap: 0.75rem;">
      <button class="md-btn md-btn-filled" onclick="testAPI()">Send Request</button>
      <button class="md-btn md-btn-tonal" onclick="clearAPITester()">Clear</button>
    </div>

    <div id="apiOutput" class="pg-output" style="display: none;"></div>
  </div>
</div>

<!-- JSON Formatter -->
<div id="json-formatter" class="pg-tab-content">
  <div class="md-tool-card">
    <h2 style="margin-bottom: 0.5rem;"><i class="fas fa-code" style="color: var(--md-sys-color-secondary);"></i> JSON Formatter & Minifier</h2>
    <p style="margin-bottom: 1.5rem;">Validate, beautify, and minify JSON data.</p>

    <textarea id="jsonInput" class="md-textarea" rows="6" placeholder='{"name":"Oleks","role":"Developer","skills":["Python","Go"]}' style="margin-bottom: 1rem;"></textarea>

    <div style="display: flex; gap: 0.75rem;">
      <button class="md-btn md-btn-filled" onclick="formatJSON()">Format & Validate</button>
      <button class="md-btn md-btn-tonal" onclick="minifyJSON()">Minify</button>
      <button class="md-btn md-btn-tonal" onclick="clearJSON()">Clear</button>
    </div>

    <div id="jsonOutput" class="pg-output" style="display: none;"></div>
  </div>
</div>

<!-- Base64 Tool -->
<div id="base64" class="pg-tab-content">
  <div class="md-tool-card">
    <h2 style="margin-bottom: 0.5rem;"><i class="fas fa-lock" style="color: var(--md-sys-color-primary);"></i> Base64 Encoder / Decoder</h2>
    <p style="margin-bottom: 1.5rem;">Encode plain text to Base64 or decode Base64 strings.</p>

    <textarea id="base64Input" class="md-textarea" rows="4" placeholder="Enter text to encode or Base64 string to decode..." style="margin-bottom: 1rem;"></textarea>

    <div style="display: flex; gap: 0.75rem;">
      <button class="md-btn md-btn-filled" onclick="encodeBase64()">Encode to Base64</button>
      <button class="md-btn md-btn-tonal" onclick="decodeBase64()">Decode from Base64</button>
      <button class="md-btn md-btn-tonal" onclick="clearBase64()">Clear</button>
    </div>

    <div id="base64Output" class="pg-output" style="display: none;"></div>
  </div>
</div>

<!-- Subnet Calculator -->
<div id="subnet-calc" class="pg-tab-content">
  <div class="md-tool-card">
    <h2 style="margin-bottom: 0.5rem;"><i class="fas fa-calculator" style="color: var(--md-sys-color-secondary);"></i> IPv4 Subnet Calculator</h2>
    <p style="margin-bottom: 1.5rem;">Calculate network address, broadcast address, and host range for any CIDR subnet.</p>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
      <input type="text" id="subnetIP" class="md-input" style="flex: 2; min-width: 180px;" placeholder="192.168.1.0" value="192.168.1.0">
      <input type="number" id="subnetMask" class="md-input" style="flex: 1; min-width: 100px;" placeholder="24" value="24" min="1" max="32">
    </div>

    <div style="display: flex; gap: 0.75rem;">
      <button class="md-btn md-btn-filled" onclick="calculateSubnet()">Calculate Subnet</button>
      <button class="md-btn md-btn-tonal" onclick="clearSubnet()">Clear</button>
    </div>

    <div id="subnetOutput" class="pg-output" style="display: none;"></div>
  </div>
</div>

<!-- UUID Generator -->
<div id="uuid-gen" class="pg-tab-content">
  <div class="md-tool-card">
    <h2 style="margin-bottom: 0.5rem;"><i class="fas fa-key" style="color: var(--md-sys-color-primary);"></i> UUID v4 Generator</h2>
    <p style="margin-bottom: 1.5rem;">Generate unique UUID v4 strings for database keys or API tokens.</p>

    <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;">
      <label style="font-size: 0.9rem; color: var(--md-sys-color-on-surface-variant);">Count:</label>
      <input type="number" id="uuidCount" class="md-input" style="width: 100px;" value="1" min="1" max="50">
    </div>

    <div style="display: flex; gap: 0.75rem;">
      <button class="md-btn md-btn-filled" onclick="generateUUIDs()">Generate</button>
      <button class="md-btn md-btn-tonal" onclick="clearUUID()">Clear</button>
    </div>

    <div id="uuidOutput" class="pg-output" style="display: none;"></div>
  </div>
</div>

<script>
  function switchPgTab(tabId) {
    document.querySelectorAll('.pg-tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.pg-tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
  }

  document.getElementById('apiMethod').addEventListener('change', function() {
    const bodyGroup = document.getElementById('apiBodyGroup');
    bodyGroup.style.display = (this.value === 'POST' || this.value === 'PUT') ? 'block' : 'none';
  });

  async function testAPI() {
    const method = document.getElementById('apiMethod').value;
    const url = document.getElementById('apiUrl').value;
    const headersText = document.getElementById('apiHeaders').value;
    const body = document.getElementById('apiBody').value;
    const output = document.getElementById('apiOutput');

    if (!url) {
      output.style.display = 'block';
      output.className = 'pg-output error';
      output.textContent = 'Error: Please enter a URL';
      return;
    }

    output.style.display = 'block';
    output.className = 'pg-output';
    output.textContent = 'Sending request...';

    try {
      const options = { method };
      if (headersText) options.headers = JSON.parse(headersText);
      if ((method === 'POST' || method === 'PUT') && body) options.body = body;

      const response = await fetch(url, options);
      const data = await response.text();
      let formatted;
      try { formatted = JSON.stringify(JSON.parse(data), null, 2); } catch { formatted = data; }

      output.className = response.ok ? 'pg-output success' : 'pg-output error';
      output.textContent = `Status: ${response.status} ${response.statusText}\n\nResponse:\n${formatted}`;
    } catch (err) {
      output.className = 'pg-output error';
      output.textContent = `Error: ${err.message}`;
    }
  }

  function clearAPITester() {
    document.getElementById('apiUrl').value = '';
    document.getElementById('apiHeaders').value = '';
    document.getElementById('apiBody').value = '';
    document.getElementById('apiOutput').style.display = 'none';
  }

  function formatJSON() {
    const input = document.getElementById('jsonInput').value;
    const output = document.getElementById('jsonOutput');
    output.style.display = 'block';
    try {
      output.className = 'pg-output success';
      output.textContent = JSON.stringify(JSON.parse(input), null, 2);
    } catch (err) {
      output.className = 'pg-output error';
      output.textContent = `Invalid JSON: ${err.message}`;
    }
  }

  function minifyJSON() {
    const input = document.getElementById('jsonInput').value;
    const output = document.getElementById('jsonOutput');
    output.style.display = 'block';
    try {
      output.className = 'pg-output success';
      output.textContent = JSON.stringify(JSON.parse(input));
    } catch (err) {
      output.className = 'pg-output error';
      output.textContent = `Invalid JSON: ${err.message}`;
    }
  }

  function clearJSON() {
    document.getElementById('jsonInput').value = '';
    document.getElementById('jsonOutput').style.display = 'none';
  }

  function encodeBase64() {
    const input = document.getElementById('base64Input').value;
    const output = document.getElementById('base64Output');
    output.style.display = 'block';
    if (!input) { output.className = 'pg-output error'; output.textContent = 'Please enter text'; return; }
    try {
      output.className = 'pg-output success';
      output.textContent = btoa(input);
    } catch (e) { output.className = 'pg-output error'; output.textContent = e.message; }
  }

  function decodeBase64() {
    const input = document.getElementById('base64Input').value;
    const output = document.getElementById('base64Output');
    output.style.display = 'block';
    if (!input) { output.className = 'pg-output error'; output.textContent = 'Please enter Base64 text'; return; }
    try {
      output.className = 'pg-output success';
      output.textContent = atob(input);
    } catch (e) { output.className = 'pg-output error'; output.textContent = 'Invalid Base64 string'; }
  }

  function clearBase64() {
    document.getElementById('base64Input').value = '';
    document.getElementById('base64Output').style.display = 'none';
  }

  function calculateSubnet() {
    const ip = document.getElementById('subnetIP').value;
    const cidr = parseInt(document.getElementById('subnetMask').value);
    const output = document.getElementById('subnetOutput');
    output.style.display = 'block';

    try {
      const parts = ip.split('.').map(Number);
      if (parts.length !== 4 || parts.some(p => p < 0 || p > 255)) throw new Error('Invalid IP');
      const mask = -1 << (32 - cidr);
      const maskParts = [(mask >>> 24) & 255, (mask >>> 16) & 255, (mask >>> 8) & 255, mask & 255];
      const netParts = parts.map((p, i) => p & maskParts[i]);
      const broadParts = netParts.map((p, i) => p | (~maskParts[i] & 255));
      const hosts = Math.pow(2, 32 - cidr);

      output.className = 'pg-output success';
      output.textContent = `Network Address: ${netParts.join('.')}\nSubnet Mask: ${maskParts.join('.')}\nCIDR: /${cidr}\nBroadcast: ${broadParts.join('.')}\nUsable Hosts: ${hosts - 2}`;
    } catch (err) {
      output.className = 'pg-output error';
      output.textContent = `Error: ${err.message}`;
    }
  }

  function clearSubnet() {
    document.getElementById('subnetIP').value = '';
    document.getElementById('subnetOutput').style.display = 'none';
  }

  function generateUUIDs() {
    const count = parseInt(document.getElementById('uuidCount').value) || 1;
    const output = document.getElementById('uuidOutput');
    output.style.display = 'block';
    const list = [];
    for (let i = 0; i < count; i++) {
      list.push('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      }));
    }
    output.className = 'pg-output success';
    output.textContent = list.join('\n');
  }

  function clearUUID() {
    document.getElementById('uuidCount').value = '1';
    document.getElementById('uuidOutput').style.display = 'none';
  }
</script>
