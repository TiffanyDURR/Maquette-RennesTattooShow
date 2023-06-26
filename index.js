const endDate = new Date("2024-05-04");
const currentDate = new Date();

const timeDiff = endDate.getTime() - currentDate.getTime();
const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
const daysDiff = Math.floor(hoursDiff / 24);
const weeksDiff = Math.floor(daysDiff / 7);
const monthsDiff = Math.floor(daysDiff / 30);

const daysAfterMonths = daysDiff - monthsDiff * 30;
const weeksAfterMonths = Math.floor(daysAfterMonths / 7);
const daysAfterWeeks = daysAfterMonths - weeksAfterMonths * 7;

const monthsDiv = document.querySelector(".months");
const weeksDiv = document.querySelector(".weeks");
const daysDiv = document.querySelector(".days");

monthsDiv.innerHTML = `
${monthsDiff}
`;

weeksDiv.innerHTML = `
${weeksAfterMonths}`;

daysDiv.innerHTML = `
${daysAfterWeeks}
`;
