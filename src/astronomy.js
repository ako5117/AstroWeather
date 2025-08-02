export function getMoonPhase(date = new Date()) {
  const phases = ["🌑 New", "🌒 Waxing", "🌓 First", "🌔 Waxing", "🌕 Full", "🌖 Waning", "🌗 Last", "🌘 Waning"];
  const cycle = 29.53; // Moon cycle in days
  const knownNewMoon = new Date('2024-01-11'); // Recent new moon
  const daysSince = (date - knownNewMoon) / (1000 * 60 * 60 * 24);
  const phaseIndex = Math.floor((daysSince % cycle) / (cycle / 8));
  return phases[phaseIndex];
}

export function getStargazingScore(weather) {
  if (weather.clouds > 70) return "🚫 Poor (Cloudy)";
  if (weather.clouds > 30) return "🌟 Fair (Some clouds)";
  return "✨ Excellent (Clear skies!)";
}
