

const buttonContainer = document.getElementById("button-container");

const loadCatagories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    data.data.forEach((item) => {
        // const catagoryBtn = document.createElement("button");
        // catagoryBtn.className = 'btn text-[#252525B2] font-medium';
        // catagoryBtn.innerText = item.category;
        // catagoryBtn.addEventListener('click',)
        // buttonContainer.appendChild(catagoryBtn);

        const div = document.createElement('div');
        div.innerHTML = `<button onclick="" class='btn text-[#252525B2] font-medium'>${item.category}</button>`
        buttonContainer.appendChild(div);

    })
}

const loadCategory = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/category/1000");
    const data = await res.json();
    const card = document.getElementById('card')
    data.data.forEach((item) => {
        const div = document.createElement('div');
        div.className = '';
        div.innerHTML = `
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="images/sample.jpg" alt="Shoes" /></figure>
        <div class="card-body">
            <div class="flex items-start gap-2">
                <img class="max-w-10 rounded-full mt-2" src="images/sample-pp.jpg" alt="">
                <div>
                    <h2 class="card-title text-[#171717] font-bold">Building a Winning UX Strategy Using the
                        Kano Model</h2>
                    <div class="flex gap-2 max-w-[150px] mb-3">
                        <p class="text-[#171717B2]">Awlad Hossain</p>
                        <img class="" src="images/verify.svg" alt="">
                    </div>
                    <p class="text-[#171717B2]">91K views</p>
                </div>
            </div>
        </div>
    </div>


            `

    card.appendChild(div);
    })
}



loadCategory()

loadCatagories()

