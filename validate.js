function checkHeight() {
    let h = (document.getElementById("myHeight").value).trim();
    if (!isNaN(h) && h >= 1 && h <= 200 && Number.isInteger(Number(h))) {
        return true;
    } else {
        return false;
    }
}

function checkInseam() {
    let i = (document.getElementById("myInseam").value).trim();
    if (!isNaN(i) && i >= 1 && i <= 100 && Number.isInteger(Number(i))) {
        return true;
    } else {
        return false;
    }
}

function validateForm(){
    const bikeType = document.querySelector('input[name="btypeRad"]:checked');
    const height = document.getElementById('myHeight').value;
    const inseam = document.getElementById('myInseam').value;

    if (!bikeType) {
        alert("กรุณาเลือกประเภทจักรยาน");
        return false;
    }

    if(!checkHeight()){
        alert("ค่าส่วนสูงไม่ถูกต้อง กรุณากรอกเป็นตัวเลขจำนวนเต็มระหว่าง 1 ถึง 200");
        document.getElementById("myHeight").focus();
        return false;
    } else {
        if(!checkInseam()){
            alert("ค่าความยาวช่วงขาไม่ถูกต้อง กรุณากรอกเป็นตัวเลขจำนวนเต็มระหว่าง 1 ถึง 100");
            document.getElementById("myInseam").focus();
            return false;
        } else {
            const heightCm = parseInt(height);
            const inseamCm = parseInt(inseam);
            const bikeTypeValue = bikeType.value;
            calculateBikeSize(bikeTypeValue, heightCm, inseamCm); // เรียกฟังก์ชันแสดงผลใน Modal
            return false; // ป้องกันการ Submit ฟอร์มจริง
        }
    }
}