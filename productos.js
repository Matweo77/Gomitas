// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Manejar clics en las categorías
    const categoryItems = document.querySelectorAll('.category-list .list-group-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remover la clase active-category de todos los elementos
            categoryItems.forEach(cat => cat.classList.remove('active-category'));
            
            // Agregar la clase active-category al elemento clickeado
            this.classList.add('active-category');
            
            // Actualizar el título de la sección principal
            document.querySelector('h2').textContent = this.textContent.trim();
            
            // Aquí se podría agregar lógica para filtrar productos según la categoría
            filterProducts(this.textContent.trim());
        });
    });
    
    // Función para filtrar productos (simulada)
    function filterProducts(category) {
        console.log(`Filtrando por categoría: ${category}`);
        // En una implementación real, aquí se filtrarían los productos
        // según la categoría seleccionada, posiblemente con una llamada AJAX
    }
    
    // Manejar la búsqueda
    const searchInput = document.querySelector('.input-group input');
    const searchButton = document.querySelector('.input-group button');
    
    searchButton.addEventListener('click', function() {
        searchProducts(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts(searchInput.value);
        }
    });
    
    function searchProducts(query) {
        console.log(`Buscando: ${query}`);
        // En una implementación real, aquí se buscarían los productos
        // según el texto ingresado, posiblemente con una llamada AJAX
    }
    
    // Manejar el ordenamiento
    const sortOptions = document.querySelectorAll('.dropdown-menu .dropdown-item');
    const sortButton = document.querySelector('#dropdownMenuButton');
    
    sortOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const sortType = this.textContent;
            sortButton.textContent = sortType;
            sortProducts(sortType);
        });
    });
    
    function sortProducts(sortType) {
        console.log(`Ordenando por: ${sortType}`);
        // En una implementación real, aquí se ordenarían los productos
        // según el criterio seleccionado
    }
    
    // Contador de productos agregados
    let productCount = 0;
    const countBadge = document.querySelector('.badge');
    const detailButtons = document.querySelectorAll('.btn-orange');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Simulación: al hacer clic en "Ver detalles" se agrega el producto
            // En una implementación real, esto sería un botón separado o una lógica diferente
            productCount++;
            countBadge.textContent = productCount;
        });
    });
});