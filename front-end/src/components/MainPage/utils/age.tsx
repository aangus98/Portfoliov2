// utils/age.ts
export function getAge(birthDateISO: string, now: Date = new Date()): number {
  const birth = new Date(birthDateISO); 
  let age = now.getFullYear() - birth.getFullYear();

  const hasHadBirthdayThisYear =
    now.getMonth() > birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());

  if (!hasHadBirthdayThisYear) age -= 1;
  return age;
}
