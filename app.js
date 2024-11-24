// Qno 1
let mathMarks = parseFloat(prompt("Enter marks for Math: "));
let scienceMarks = parseFloat(prompt("Enter marks for Science: "));
let englishMarks = parseFloat(prompt("Enter marks for English: "));
let historyMarks = parseFloat(prompt("Enter marks for History: "));
let computerMarks = parseFloat(prompt("Enter marks for Computer: "));

const totalMarks = 500;

let obtainedMarks = mathMarks + scienceMarks + englishMarks + historyMarks + computerMarks;
let percentage = (obtainedMarks / totalMarks) * 100;


let grade;
if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "F";
}

document.write(`
    <h1>Mark Sheet</h1>
    <p><strong>Math:</strong> ${mathMarks}</p>
    <p><strong>Science:</strong> ${scienceMarks}</p>
    <p><strong>English:</strong> ${englishMarks}</p>
    <p><strong>History:</strong> ${historyMarks}</p>
    <p><strong>Computer:</strong> ${computerMarks}</p>
    <p><strong>Total Marks:</strong> ${totalMarks}</p>
    <p><strong>Obtained Marks:</strong> ${obtainedMarks}</p>
    <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
    <p><strong>Grade:</strong> ${grade}</p> <br> <br>
  `);


// Qno2
// mobile objects
const mobiles = {
    iphone: {
      iphone7: {
        processor: "Snapdragon 8 Gen 2",
        memory: { ram: 12, storage: 512 },
        camera: { rear: { main: 200 }, front: 10 },
        battery: 5000,
        operatingSystem: "iOS 11",
      },
      iphone8: {
        processor: "Snapdragon 12 Gen 5",
        memory: { ram: 8, storage: 256 },
        camera: { rear: { main: 180 }, front: 12 },
        battery: 8000,
        operatingSystem: "iOS 12",
      },
      iphone8plus: {
        processor: "Apple A11 Bionic",
        memory: { ram: 3, storage: 64 },
        camera: { rear: { main: 12 }, front: 7 },
        battery: 2675,
        operatingSystem: "iOS 11",
      },
      iphoneX: {
        processor: "Apple A11 Bionic",
        memory: { ram: 3, storage: 64 },
        camera: { rear: { main: 12 }, front: 7 },
        battery: 2716,
        operatingSystem: "iOS 11",
      },
      iphone11: {
        processor: "Apple A13 Bionic",
        memory: { ram: 4, storage: 64 },
        camera: { rear: { main: 12, ultrawide: 12 }, front: 12 },
        battery: 3110,
        operatingSystem: "iOS 13",
      },
      iphone11pro: {
        processor: "Apple A13 Bionic",
        memory: { ram: 4, storage: 64 },
        camera: { rear: { main: 12, ultrawide: 12, telephoto: 12 }, front: 12 },
        battery: 3046,
        operatingSystem: "iOS 13",
      },
      iphone12: {
        processor: "Apple A14 Bionic",
        memory: { ram: 4, storage: 64 },
        camera: { rear: { main: 12, ultrawide: 12 }, front: 12 },
        battery: 2815,
        operatingSystem: "iOS 14",
      },
      iphone12pro: {
        processor: "Apple A14 Bionic",
        memory: { ram: 6, storage: 128 },
        camera: { rear: { main: 12, ultrawide: 12, telephoto: 12 }, front: 12 },
        battery: 2815,
        operatingSystem: "iOS 14",
      },
      iphone13: {
        processor: "Apple A15 Bionic",
        memory: { ram: 4, storage: 128 },
        camera: { rear: { main: 12, ultrawide: 12 }, front: 12 },
        battery: 3240,
        operatingSystem: "iOS 15",
      },
      iphone13pro: {
        processor: "Apple A15 Bionic",
        memory: { ram: 6, storage: 128 },
        camera: { rear: { main: 12, ultrawide: 12, telephoto: 12 }, front: 12 },
        battery: 3095,
        operatingSystem: "iOS 15",
      },
      iphone14: {
        processor: "Apple A15 Bionic",
        memory: { ram: 6, storage: 128 },
        camera: { rear: { main: 12, ultrawide: 12 }, front: 12 },
        battery: 3279,
        operatingSystem: "iOS 16",
      },
      iphone14pro: {
        processor: "Apple A16 Bionic",
        memory: { ram: 6, storage: 128 },
        camera: { rear: { main: 48, ultrawide: 12, telephoto: 12 }, front: 12 },
        battery: 3200,
        operatingSystem: "iOS 16",
      },
      iphone15: {
        processor: "Apple A16 Bionic",
        memory: { ram: 6, storage: 128 },
        camera: { rear: { main: 48, ultrawide: 12 }, front: 12 },
        battery: 3349,
        operatingSystem: "iOS 17",
      },
      iphone15pro: {
        processor: "Apple A17 Pro",
        memory: { ram: 8, storage: 256 },
        camera: { rear: { main: 48, ultrawide: 12, telephoto: 12 }, front: 12 },
        battery: 3275,
        operatingSystem: "iOS 17",
      },
    },
    samsung: {
      galaxyS24: {
        processor: "Snapdragon 8 Gen 2",
        memory: { ram: 12, storage: 512 },
        camera: { rear: { main: 108 }, front: 40 },
        battery: 5000,
        operatingSystem: "Android 14",
      },
      galaxyZFold5: {
        processor: "Snapdragon 8 Gen 2",
        memory: { ram: 12, storage: 256 },
        camera: { rear: { main: 50, ultrawide: 12 }, front: 10 },
        battery: 4400,
        operatingSystem: "Android 13",
        specialFeatures: ["Foldable screen", "Under-display camera", "S Pen support"]
      },
      galaxyM14: {
        processor: "Exynos 1330",
        memory: { ram: 4, storage: 64 },
        camera: { rear: { main: 50, ultrawide: 5 }, front: 13 },
        battery: 6000,
        operatingSystem: "Android 13",
        specialFeatures: ["Super AMOLED display", "5G connectivity", "6000mAh battery"]
      }
    },
    oneplus: {
      oneplus11: {
        processor: "Snapdragon 8 Gen 2",
        memory: { ram: 16, storage: 256 },
        camera: { rear: { main: 50 }, front: 32 },
        battery: 5000,
        operatingSystem: "OxygenOS 13",
      },
      oneplusNord: {
        processor: "MediaTek Dimensity 1200",
        memory: { ram: 8, storage: 128 },
        camera: { rear: { main: 64 }, front: 16 },
        battery: 4500,
        operatingSystem: "OxygenOS 12",
      },
    },
    google: {
      pixel7: {
        processor: "Google Tensor G2",
        memory: { ram: 8, storage: 128 },
        camera: { rear: { main: 50 }, front: 10 },
        battery: 4355,
        operatingSystem: "Android 13",
      },
      pixelFold: {
        processor: "Google Tensor G2",
        memory: { ram: 12, storage: 256 },
        camera: { rear: { main: 48 }, front: 9.5 },
        battery: 4800,
        operatingSystem: "Android 13",
      },
    },
  };
  
  
  // Populate Brand Dropdown
  function populateBrands() {
    const brandDropdown = document.getElementById("brand");
    const brands = Object.keys(mobiles);
  
    // Populate options dynamically
    brands.forEach((brand) => {
      const option = document.createElement("option");
      option.value = brand;
      option.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
      brandDropdown.appendChild(option);
    });
  }
  
  // Populate Model Dropdown
  function populateModels() {
    const brandDropdown = document.getElementById("brand");
    const modelDropdown = document.getElementById("model");
  
    // Clear existing models
    modelDropdown.innerHTML = `<option value="" disabled selected>Select a Model</option>`;
  
    // Get selected brand and populate models
    const selectedBrand = brandDropdown.value;
    if (mobiles[selectedBrand]) {
      const models = Object.keys(mobiles[selectedBrand]);
      models.forEach((model) => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model.charAt(0).toUpperCase() + model.slice(1);
        modelDropdown.appendChild(option);
      });
    }
  }
  
  // Search Mobile Features
  function searchMobile() {
    const brandDropdown = document.getElementById("brand");
    const modelDropdown = document.getElementById("model");
    const resultDiv = document.getElementById("result");
  
    const selectedBrand = brandDropdown.value;
    const selectedModel = modelDropdown.value;
  
    if (!selectedBrand || !selectedModel) {
      resultDiv.innerHTML = `<p style="color: red;">Please select both brand and model.</p>`;
      return;
    }
  
    const mobile = mobiles[selectedBrand]?.[selectedModel];
    if (mobile) {
      resultDiv.innerHTML = `
        <h3>Mobile Features:</h3>
        <ul>
          <li><strong>Processor:</strong> ${mobile.processor}</li>
          <li><strong>RAM:</strong> ${mobile.memory.ram}GB</li>
          <li><strong>Storage:</strong> ${mobile.memory.storage}GB</li>
          <li><strong>Camera (Rear):</strong> ${mobile.camera.rear.main}MP</li>
          <li><strong>Camera (Front):</strong> ${mobile.camera.front}MP</li>
          <li><strong>Battery:</strong> ${mobile.battery}mAh</li>
          <li><strong>Operating System:</strong> ${mobile.operatingSystem}</li>
        </ul>
      `;
    } else {
      resultDiv.innerHTML = `<p style="color: red;">Mobile details not found.</p>`;
    }
  }
  
  // Initialize the brand dropdown on page load
  window.onload = populateBrands;
  


   

  
    



