fetch('https://www.youtube.com/@trakintronics/videos')
  .then(res => res.text())
  .then(html => {
    const matches = [...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)];
    const uniqueIds = [...new Set(matches.map(m => m[1]))];
    console.log(uniqueIds.slice(0, 10));
  });
