

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
        console.log(item.others);
        let verifiedBadge = ""
        if(item.authors[0].verified) {
            verifiedBadge = `<img class="" src="images/verify.svg" alt="">`
        }
        const div = document.createElement('div');
        div.className = '';
        div.innerHTML = `
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="${item.thumbnail}" alt="" /></figure>
        <div class="card-body">
            <div class="flex items-start gap-2">
                <img class="w-10 h-10 rounded-full" src="${item.authors[0].profile_picture}" alt="">
                <div>
                    <h2 class="card-title text-[#171717] font-bold">${item.title}</h2>
                    <div class="flex gap-2 max-w-[150px] mb-3">
                        <p class="text-[#171717B2]">${item.authors[0].profile_name}</p>
                        ${verifiedBadge}
                    </div>
                    <p class="text-[#171717B2]">${item.others.views}</p>
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

