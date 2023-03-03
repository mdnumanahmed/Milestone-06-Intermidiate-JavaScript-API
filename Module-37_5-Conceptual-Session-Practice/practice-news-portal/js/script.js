let loadedData = []

const loadCategories = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    try {
        const res = await fetch(url)
        const data = await res.json()
        showCategories(data.data.news_category);
    } catch (error) {
        console.log(error);
    }
}

const showCategories = (data) => {
    console.log(data);
    const categoriesContainer = document.getElementById('categoriesContainer')
    data.forEach(category => {
        console.log(category);
        const {category_id, category_name} = category
        categoriesContainer.innerHTML += `<li>
        <a
          href="#"
          onclick="loadCategoryNews('${category_id}', '${category_name}')"
          class="text-gray-900 dark:text-white hover:underline"
          aria-current="page"
          >${category_name}</a
        >
      </li>`
    })
}

const loadCategoryNews = async (category_id, category_name) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id} `
    console.log(url);
    try {
        const res = await fetch(url)
        const data  = await res.json()
        loadedData = data.data
        showCategoryNews(data.data, category_name)
    } catch (error) {
        console.log(error);
    }
}

const showCategoryNews = (data, category_name) => {
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('category-name').innerText = category_name;
    const newsContainer = document.getElementById('newsContainer')
    data.forEach(singleNews => {
        const {author, details, image_url, thumbnail_url, title, total_view, rating, others_info} = singleNews
        console.log(singleNews);
        newsContainer.innerHTML += `
        <div class="flex max-h-80 mb-8 bg-slate-200 rounded-lg shadow-lg">
            <img class="w-64 h-auto" src="${thumbnail_url}" alt="">
            <div class="p-5">
                <h4>${title}</h4>
                <p>${details}</p>
                <div class="flex justify-between p-5 items-center">
                    <div class="flex items-center">
                        <div><img class="w-20 rounded-full mr-3" src="${author.img}" alt=""></div>
                        <div>
                            <h3>${author.name}</h3>
                            <p>${author.published_date}</p>
                        </div>
                    </div>
                    <div>Total View: ${total_view}</div>
                    <div>${rating.badge} ${rating.number}</div>
                    <div class="readmore">></div>
                </div>
            </div>
      </div>`

    })
}



loadCategories()