// variables
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggle = document.querySelector('.theme-toggle');

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})


// change theme
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
})
// fill orders in table
orders.forEach(order => {
    const tr = document.createElement('tr')
    const trContent = `
                        <tr>
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class="${order.Shipping === 'Declined' ? 'danger' : order.Shipping === 'Pending' ? 'warning' : 'primary'}">
                                ${order.Shipping}
                            </td>
                            <td class="primary">Details</td>
                        </tr>
                    `

    tr.innerHTML=trContent
    document.querySelector('table tbody').appendChild(tr);
})