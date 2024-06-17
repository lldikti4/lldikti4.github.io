import { parse } from 'papaparse';

async function handleRequest() {
  const csvUrl = 'https://yourdomain.com/path/to/data.csv'; // Ganti dengan URL CSV Anda

  const response = await fetch(csvUrl);
  const csvData = await response.text();

  const parsedData = parse(csvData, {
    header: true,
    dynamicTyping: true
  }).data;

  const merah = parsedData.filter(row => row.Klaster === 'Merah');
  const kuning = parsedData.filter(row => row.Klaster === 'Kuning');
  const hijau = parsedData.filter(row => row.Klaster === 'Hijau');

  const result = {
    merah: merah,
    kuning: kuning,
    hijau: hijau
  };

  return new Response(JSON.stringify(result), {
    headers: { 'content-type': 'application/json' }
  });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest());
});
