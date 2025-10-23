export const PickDailyJoke = (array: string[]) => {
  if (!Array.isArray(array) || array.length === 0) return null;

  const now = new Date();

  // Get local date string (YYYY-MM-DD)
  const today = now.toLocaleDateString("en-CA");

  // Get current 3-hour time slot (0-7)
  const hour = now.getHours();
  const timeSlot = Math.floor(hour / 3);

  // Combine date and time slot for unique identifier
  const seedString = `${today}-${timeSlot}`;

  // Simple stable hash from string → integer
  let hash = 0;
  for (let i = 0; i < seedString.length; i++) {
    hash = (hash << 5) - hash + seedString.charCodeAt(i);
    hash |= 0; // 32-bit integer
  }

  // Deterministically pick one element
  const index = Math.abs(hash) % array.length;
  return array[index];
};
