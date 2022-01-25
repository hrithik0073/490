var db_connect = require("../../db_connect");

var prereq = [
	{
		"Id": 1,
		"Department": "COMP",
		"CourseNumber": "100",
		"Credits": "3.0",
		"prerequisite": null
	},
	{
		"Id": 2,
		"Department": "COMP",
		"CourseNumber": "102",
		"Credits": "2.0",
		"prerequisite": "MATH 093|MATH 196QR|MATH 196S"
	},
	{
		"Id": 3,
		"Department": "COMP",
		"CourseNumber": "102L",
		"Credits": "1.0",
		"prerequisite": null
	},
	{
		"Id": 4,
		"Department": "COMP",
		"CourseNumber": "105BAS",
		"Credits": "1.0",
		"prerequisite": "COMP 101|COMP 110|COMP 106"
	},
	{
		"Id": 5,
		"Department": "COMP",
		"CourseNumber": "108",
		"Credits": "3.0",
		"prerequisite": "MATH 093|MATH 196QR|MATH 196S"
	},
	{
		"Id": 6,
		"Department": "COMP",
		"CourseNumber": "110",
		"Credits": "3.0",
		"prerequisite": "MATH 102|MATH 103|MATH 104|MATH 105|MATH 150A|MATH 255A"
	},
	{
		"Id": 7,
		"Department": "COMP",
		"CourseNumber": "110L",
		"Credits": "1.0",
		"prerequisite": null
	},
	{
		"Id": 8,
		"Department": "COMP",
		"CourseNumber": "111A",
		"Credits": "2.0",
		"prerequisite": "MATH 093|MATH 196QR|MATH 196S"
	},
	{
		"Id": 9,
		"Department": "COMP",
		"CourseNumber": "111AL",
		"Credits": "1.0",
		"prerequisite": null
	},
	{
		"Id": 10,
		"Department": "COMP",
		"CourseNumber": "111B",
		"Credits": "2.0",
		"prerequisite": "MATH 102|MATH 103|MATH 104|MATH 105|MATH 150A|MATH 255A"
	},
	{
		"Id": 11,
		"Department": "COMP",
		"CourseNumber": "111BL",
		"Credits": "1.0",
		"prerequisite": null
	},
	{
		"Id": 12,
		"Department": "COMP",
		"CourseNumber": "122",
		"Credits": "1.0",
		"prerequisite": "COMP 110+MATH 103|COMP 110+MATH 104|COMP 110+MATH 105|COMP 110+MATH 150A|COMP 110+MATH 255A"
	},
	{
		"Id": 13,
		"Department": "COMP",
		"CourseNumber": "122L",
		"Credits": "1.0",
		"prerequisite": null
	},
	{
		"Id": 14,
		"Department": "COMP",
		"CourseNumber": "182",
		"Credits": "3.0",
		"prerequisite": "COMP 110+MATH 103|COMP 110+MATH 104|COMP 110+MATH 105|COMP 110+MATH 150A|COMP 110+MATH 255A"
	},
	{
		"Id": 15,
		"Department": "COMP",
		"CourseNumber": "182L",
		"Credits": "1.0",
		"prerequisite": null
	},
	{
		"Id": 16,
		"Department": "COMP",
		"CourseNumber": "222",
		"Credits": "3.0",
		"prerequisite": "COMP 122+COMP 182"
	},
	{
		"Id": 17,
		"Department": "COMP",
		"CourseNumber": "256",
		"Credits": "3.0",
		"prerequisite": "COMP 182+MATH 150A+PHIL 230"
	},
	{
		"Id": 18,
		"Department": "COMP",
		"CourseNumber": "256L",
		"Credits": "1.0",
		"prerequisite": null
	},
	{
		"Id": 19,
		"Department": "COMP ",
		"CourseNumber": "282",
		"Credits": "3.0",
		"prerequisite": "COMP182+MATH150A"
	},
	{
		"Id": 20,
		"Department": "COMP",
		"CourseNumber": "300",
		"Credits": "3.0",
		"prerequisite": null
	},
	{
		"Id": 21,
		"Department": "COMP",
		"CourseNumber": "310",
		"Credits": "3.0",
		"prerequisite": "COMP 256|MATH 326"
	},
	{
		"Id": 22,
		"Department": "COMP",
		"CourseNumber": "322",
		"Credits": "3.0",
		"prerequisite": "COMP 222|(ECE 422+ECE 425)"
	},
	{
		"Id": 23,
		"Department": "COMP",
		"CourseNumber": "333",
		"Credits": "3.0",
		"prerequisite": "COMP 282"
	},
	{
		"Id": 24,
		"Department": "COMP",
		"CourseNumber": "380",
		"Credits": "2.0",
		"prerequisite": "COMP 270+PHIL 230|COMP 282+PHIL 230"
	},
	{
		"Id": 25,
		"Department": "COMP",
		"CourseNumber": "410",
		"Credits": "3.0",
		"prerequisite": "COMP 333+COMP 282+COMP 310"
	},
	{
		"Id": 26,
		"Department": "COMP",
		"CourseNumber": "424",
		"Credits": "3.0",
		"prerequisite": "COMP 322+COMP 380"
	},
	{
		"Id": 27,
		"Department": "COMP",
		"CourseNumber": "429",
		"Credits": "3.0",
		"prerequisite": "COMP 322"
	},
	{
		"Id": 28,
		"Department": "COMP",
		"CourseNumber": "430",
		"Credits": "3.0",
		"prerequisite": "COMP 310+COMP 380"
	},
	{
		"Id": 29,
		"Department": "COMP",
		"CourseNumber": "440",
		"Credits": "3.0",
		"prerequisite": "COMP 380"
	},
	{
		"Id": 30,
		"Department": "COMP",
		"CourseNumber": "442",
		"Credits": "3.0",
		"prerequisite": "COMP 182+MATH 444|COMP 380+MATH 340|COMP 380+MATH 341"
	},
	{
		"Id": 31,
		"Department": "COMP",
		"CourseNumber": "465",
		"Credits": "2.0",
		"prerequisite": "MATH 262"
	},
	{
		"Id": 32,
		"Department": "COMP",
		"CourseNumber": "465L",
		"Credits": "1.0",
		"prerequisite": null
	},
	{
		"Id": 33,
		"Department": "COMP",
		"CourseNumber": "467",
		"Credits": "3.0",
		"prerequisite": "COMP 380"
	},
	{
		"Id": 34,
		"Department": "COMP",
		"CourseNumber": "469",
		"Credits": "3.0",
		"prerequisite": "COMP 310+COMP 380+COMP 410"
	},
	{
		"Id": 35,
		"Department": "COMP",
		"CourseNumber": "482",
		"Credits": "3.0",
		"prerequisite": "COMP 282+COMP 256|COMP 282+MATH 320|COMP 282+MATH 326"
	},
	{
		"Id": 36,
		"Department": "COMP",
		"CourseNumber": "484",
		"Credits": "2.0",
		"prerequisite": "COMP 322|COMP 380|CIT 360"
	},
	{
		"Id": 37,
		"Department": "COMP",
		"CourseNumber": "485",
		"Credits": "3.0",
		"prerequisite": "COMP 380|CIT 360"
	},
	{
		"Id": 38,
		"Department": "COMP",
		"CourseNumber": "490",
		"Credits": "3.0",
		"prerequisite": "COMP 380"
	},
	{
		"Id": 39,
		"Department": "COMP",
		"CourseNumber": "490L",
		"Credits": "1.0",
		"prerequisite": null
	},
	{
		"Id": 40,
		"Department": "COMP",
		"CourseNumber": "491L",
		"Credits": "1.0",
		"prerequisite": "COMP 490"
	},
	{
		"Id": 41,
		"Department": "COMP",
		"CourseNumber": "492",
		"Credits": "3.0",
		"prerequisite": "COMP 442+MATH 445"
	},
	{
		"Id": 42,
		"Department": "COMP",
		"CourseNumber": "522",
		"Credits": "3.0",
		"prerequisite": "COMP 322"
	},
	{
		"Id": 43,
		"Department": "COMP",
		"CourseNumber": "528",
		"Credits": "3.0",
		"prerequisite": "COMP 322|COMP 380"
	},
	{
		"Id": 44,
		"Department": "COMP",
		"CourseNumber": "529",
		"Credits": "2.0",
		"prerequisite": "COMP 429"
	},
	{
		"Id": 45,
		"Department": "COMP",
		"CourseNumber": "529L",
		"Credits": "1.0",
		"prerequisite": null
	},
	{
		"Id": 46,
		"Department": "COMP",
		"CourseNumber": "539",
		"Credits": "3.0",
		"prerequisite": "COMP 424|COMP 429"
	},
	{
		"Id": 47,
		"Department": "COMP",
		"CourseNumber": "541",
		"Credits": "3.0",
		"prerequisite": "COMP 380"
	},
	{
		"Id": 48,
		"Department": "COMP",
		"CourseNumber": "542",
		"Credits": "3.0",
		"prerequisite": "COMP 380+COMP 340|COMP 380+COMP 341"
	},
	{
		"Id": 49,
		"Department": "COMP",
		"CourseNumber": "560",
		"Credits": "3.0",
		"prerequisite": "COMP 469"
	},
	{
		"Id": 50,
		"Department": "COMP",
		"CourseNumber": "565",
		"Credits": "3.0",
		"prerequisite": "COMP 322"
	},
	{
		"Id": 51,
		"Department": "COMP",
		"CourseNumber": "581",
		"Credits": "3.0",
		"prerequisite": "COMP 380"
	},
	{
		"Id": 52,
		"Department": "COMP",
		"CourseNumber": "583",
		"Credits": "3.0",
		"prerequisite": "COMP 380"
	},
	{
		"Id": 53,
		"Department": "COMP",
		"CourseNumber": "584",
		"Credits": "3.0",
		"prerequisite": "COMP 380"
	},
	{
		"Id": 54,
		"Department": "COMP",
		"CourseNumber": "585",
		"Credits": "3.0",
		"prerequisite": "COMP 322+COMP 380"
	},
	{
		"Id": 55,
		"Department": "COMP",
		"CourseNumber": "586",
		"Credits": "3.0",
		"prerequisite": "COMP 322+COMP 380"
	},
	{
		"Id": 56,
		"Department": "COMP",
		"CourseNumber": "587",
		"Credits": "3.0",
		"prerequisite": "COMP 380"
	},
	{
		"Id": 57,
		"Department": "COMP",
		"CourseNumber": "589",
		"Credits": "3.0",
		"prerequisite": "COMP 380+MATH 340|COMP 380+MATH 341"
	},
	{
		"Id": 58,
		"Department": "COMP",
		"CourseNumber": "610",
		"Credits": "3.0",
		"prerequisite": "COMP 310+COMP 482"
	},
	{
		"Id": 59,
		"Department": "COMP",
		"CourseNumber": "615",
		"Credits": "3.0",
		"prerequisite": "COMP 310+MATH 482"
	},
	{
		"Id": 60,
		"Department": "COMP",
		"CourseNumber": "620",
		"Credits": "3.0",
		"prerequisite": "COMP 322+COMP 380"
	},
	{
		"Id": 61,
		"Department": "COMP",
		"CourseNumber": "680",
		"Credits": "3.0",
		"prerequisite": "COMP 380+COMP 582"
	}
];

//get all courses which has this course in as prereq
let re = new RegExp('.*COMP 110.*');

let obj = prereq.filter(o => re.exec(o.prerequisite));

var prereq = obj.map(function (i) { return { "course": i.Department + " " + i.CourseNumber, "prereq": i.prerequisite } });

//console.log(obj);
for (var i = 0; i < obj.length; i++) {
	console.log('Course: ' + obj[i].Department + ' ' + obj[i].CourseNumber);
	var eachCourse = obj[i].prerequisite.split("|");
	console.log("Prereqs: ")

	for (var j = 0; j < eachCourse.length; j++) {
		var and = eachCourse[j].split("+");
		console.log(and);
		if(j != eachCourse.length - 1)
			console.log("OR");

		for (var check = 0; check < and.length; check++) {
			let sql = "SELECT courseNumber, grade FROM CourseCompletedByStudent WHERE Department = '" + and[check].substr(0, and[check].indexOf(' ')) + "' AND CourseNumber = '" + and[check].substr(and[check].indexOf(' ') + 1) + "';";
			function checkGrades() {
				return new Promise((resolve, reject) => {
					db_connect.query(sql, function (err, data) {
						if (err) {
							return reject(err);
						}
						resolve(data);
					});
				})
			}

			async (req, res) => {
				try {
					const checking = await checkGrades();
					res.send(checking);
					console.log(checking);
				} catch (error) {
					res.status(500).send(error)
				}
			}
			/*console.log(and[check].substr(0,and[check].indexOf(' ')));
			console.log(and[check].substr(and[check].indexOf(' ')+1));*/
		}
	}
}


//find it in the database
//return the result if found or else 