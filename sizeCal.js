function calculateBikeSize(bikeTypeValue, heightCm, inseamCm) {
   let bikeSizeText = "";
   let bikeSizeImageSrc = "";

   if (bikeTypeValue === '1') { // Mountain bike
       const frameSizeInInches = (inseamCm * 0.66).toFixed(1);
       bikeSizeText = `ขนาดเฟรมที่แนะนำ (โดยประมาณ): ${frameSizeInInches} นิ้ว`;
       bikeSizeImageSrc = './mountain_bike.jpg'; // เปลี่ยนเป็นชื่อไฟล์ Mountain bike ของคุณ
   } else if (bikeTypeValue === '2') { // Road bike
       const frameSizeInCm = Math.round(heightCm * 0.65);
       bikeSizeText = `ขนาดเฟรมที่แนะนำ (โดยประมาณ): ${frameSizeInCm} ซม.`;
       bikeSizeImageSrc = "./road_bike.jpg"; // เปลี่ยนเป็นชื่อไฟล์ Road bike ของคุณ
   } else {
       bikeSizeText = "ไม่สามารถคำนวณขนาดได้";
   }

   // แสดงผลลัพธ์ใน Modal
   const modal = new bootstrap.Modal(document.getElementById('myModal'));
   const modalTitle = document.getElementById('modal-title');
   const modalBody = document.querySelector('#myModal .modal-body');

   modalTitle.innerText = 'ผลการคำนวณขนาดจักรยาน';
   modalBody.innerHTML = `<img src="${bikeSizeImageSrc}" id="info-img" style="max-width: 100%; height: auto;" alt="ผลการคำนวณขนาดจักรยาน"><p class="mt-2">${bikeSizeText}</p>`;

   modal.toggle();
}