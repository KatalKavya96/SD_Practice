// Interface in TS

interface Studentt {
  id: number;
  name: string;
  isEnrolled: boolean;
}

let stu: Studentt = {
  id: 1,
  name: "Kavya",
  isEnrolled: true,
};

console.log("Interface Object:", stu);