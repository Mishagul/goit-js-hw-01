function slugify(title) {
title = title.toLowerCase();
title = title.replace(/[^a-z0-9]+/g, '-');
title = title.replace(/(^-|-$)/g, '');
return title;
}

console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
