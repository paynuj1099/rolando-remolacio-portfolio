/**
 * Calculate years of experience based on career start date
 * Started professional career in April 2023
 */
export function getYearsOfExperience(): string {
  const startDate = new Date('2023-05-01') // May 2023
  const currentDate = new Date()
  
  const yearsDiff = currentDate.getFullYear() - startDate.getFullYear()
  const monthsDiff = currentDate.getMonth() - startDate.getMonth()
  
  const totalMonths = yearsDiff * 12 + monthsDiff
  const years = Math.floor(totalMonths / 12)
  
  // Return in "X+" format for consistency
  return `${years}+`
}

/**
 * Get the full experience description
 */
export function getExperienceDescription(): string {
  return `${getYearsOfExperience()} years`
}

/**
 * Calculate years of experience for a specific skill
 * @param startYear - Year when started using the skill
 * @param startMonth - Month when started using the skill (1-12)
 */
export function calculateSkillYears(startYear: number, startMonth: number = 4): string {
  const startDate = new Date(startYear, startMonth - 1, 1)
  const currentDate = new Date()
  
  const yearsDiff = currentDate.getFullYear() - startDate.getFullYear()
  const monthsDiff = currentDate.getMonth() - startDate.getMonth()
  
  const totalMonths = yearsDiff * 12 + monthsDiff
  const years = totalMonths / 12
  
  if (years < 1) {
    return '< 1 yr'
  } else if (years < 1.5) {
    return '1 yr'
  } else if (years < 2.5) {
    return '2 yrs'
  } else if (years < 3.5) {
    return '3 yrs'
  } else if (years < 4.5) {
    return '4 yrs'
  } else {
    return `${Math.floor(years)} yrs`
  }
}
