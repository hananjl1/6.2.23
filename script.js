let fname = prompt("הקלידו את שמכם");
// Check if fname is empty
if (!fname) {
  alert("שדה שם לא הוכנס");
}

let email = prompt("הקלידו את כתובת האימייל");
// Check if email is empty
if (!email) {
  alert("שדה אימייל לא הוכנס");
}

let age = Number(prompt("מה הגיל שלך"));
// Check if age is a number
if (isNaN(age)) {
  alert("שדה הגיל יכול להכיל רק מספרים");
}
// Check if age is empty check why it show alert also when i type letters
if (!age && age != 0) {
  alert("לא הוכנס ערך בשדה גיל");
}

let gender = prompt("הקלידו 'ז' לזכר או 'נ' לנקבה");
// Check if gender is empty
if (!gender) {
  alert("לא הוכנס ערך בשדה מין");
}

// Check if gender have the right values
if (gender !== "ז" && gender !== "נ") {
  alert("יכול להכיל רק 'ז' או 'נ'");
}

// In case gender is female
if (gender === "נ") {
  alert("ברוכה הבאה " + fname);
  // Subscribers email list request
  if (confirm("תרצי להרשם לרשימת המנויים שלנו?")) {
    alert("תודה, האימייל שלך נרשם בהצלחה");
  } else {
    alert("ההפסד כולו שלך!");
  }
  // In case gender is male
} else {
  if (gender === "ז") {
    alert("ברוך הבא " + fname);
    // Subscribers email list request
    if (confirm("תרצה להרשם לרשימת המנויים שלנו?")) {
      alert("תודה, האימייל שלך נרשם בהצלחה");
    } else {
      alert("ההפסד כולו שלך!");
    }
  } else {
    alert("לא הקלדתם ז/נ ולכן התוכנית הפסיקה!");
  }
}

if (age <= 0) {
  alert("חחחחח זה לא הגיוני שהגיל שלך הוא " + age);
} else {
  if (age >= 0 && age <= 6) {
    alert(age + " זה גיל של בית גן חובה");
  } else {
    if (age >= 7 && age <= 12) {
      alert(age + " זה גיל של בית ספר יסודי");
    } else {
      if (age >= 13 && age <= 15) {
        alert(age + " זה גיל של בית ספר יסודי");
      } else {
        if (age >= 16 && age <= 21) {
          alert(age + " זה גיל של תיכון");
        } else {
          if (age >= 22) {
            alert(age + " זה בדיוק הגיל הממוצע של המנויים שלנו!");
          }
        }
      }
    }
  }
}
