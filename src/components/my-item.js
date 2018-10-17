customElements.define('my-item', class MyItem extends HTMLElement {
    styles() {
        return `
<style>
.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 24px;
    font-weight: bold;
    color: gold;
    line-height: 50px;
    text-align: center;
    background-image: radial-gradient(#5d5d5d 20%, black 40%);
    display: inline-block;
}
</style>`;
    }
    render() {
        this.root.innerHTML = this.template();
    }
    connectedCallback() {
        this.root = this.attachShadow({ mode: 'open' });;
        this.render();
    }
    static get observedAttributes() {
        return ['value'];
    }
    attributeChangedCallback(attr, oldValue, newValue) {
        if (this.root) this.render();
    }
    template() {
        return `${this.styles()}
<div class="circle">${this.getAttribute('value')}</div>`;
    }
});
