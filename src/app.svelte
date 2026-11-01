<style>
    @import "./tiny.css";

    .tinycss {
        padding: 1rem;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: auto;
    }
    /* .debug {
        outline: 1px solid rgba(255, 50, 50, 0.3);
    } */
</style>

<div class="tinycss">
    <dialog id="modal">
        <article>
            <h3>Confirmation.</h3>
            <hr />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius perferendis dolore vitae voluptatum
                cupiditate nam commodi totam cum, officia quibusdam?
            </p>
            <button command="close" commandfor="modal">I agree</button>
        </article>
    </dialog>
    <button command="show-modal" commandfor="modal">
        <span>Show modal</span>
    </button>
    <hr />
    <span aria-busy="true">Generating link...</span>
    <hr />
    <form role="search">
        <input type="search" />
        <button>Search</button>
    </form>
    <hr />
    <textarea name="" id=""></textarea>
    <hr />
    <hr />
    <form action="">
        <fieldset role="group">
            <input type="text" />
            <button>Subscribe</button>
        </fieldset>
    </form>
    <hr />
    <details>
        <summary>test</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, pariatur.</p>
    </details>
    <hr />
    <details>
        <summary role="button">test</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, pariatur.</p>
    </details>
    <hr />
    <button>test</button>
    <hr />
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <hr />
    <small>Small</small>
    <hr />
    <hgroup>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, obcaecati.</p>
    </hgroup>
    <hr />
    <abbr>What is this?</abbr>
    <hr />
    <mark>test</mark>
    <hr />
    <strong>Lorem ipsum dolor sit amet.</strong>
    <hr />
    <b>Lorem ipsum dolor sit amet.</b>
    <hr />
    <s>Lorem ipsum dolor sit amet.</s>
    <hr />
    <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, culpa?</i>
    <hr />
    <del>Lorem ipsum dolor sit amet.</del>
    <hr />
    <ins>Lorem ipsum dolor sit amet.</ins>
    <hr />
    <span>Lorem, ipsum.</span><sub>sub</sub>
    <hr />
    <span>Lorem, ipsum.</span><sup>sup</sup>
    <hr />
    <kbd>ctrl + s</kbd>
    <hr />
    <blockquote>
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam itaque numquam eius ipsum quas, quod
        impedit maxime odio dolorem pariatur repellat excepturi at modi qui, tenetur blanditiis ullam nam. Laudantium
        nostrum libero maiores non adipisci maxime, eum autem corrupti expedita vero explicabo rerum provident illo cum
        fugit recusandae obcaecati?”
        <footer>
            <cite>— Lorem, ipsum.</cite>
        </footer>
    </blockquote>
    <hr />
    <p>Paragraph before the horizontal line.</p>
    <hr />
    <p>Paragraph after the horizontal line.</p>
    <hr />
    <a href="#">Lorem, ipsum.</a>
    <hr />
    <a href="#" target="_blank">Lorem, ipsum.</a>
    <hr />
    <table>
        <thead>
            <tr>
                <th>Lorem.</th>
                <th>Lorem.</th>
                <th>Lorem.</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
            </tr>
            <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
            </tr>
            <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
            </tr>
            <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Lorem.</th>
                <th>Lorem.</th>
                <th>Lorem.</th>
            </tr>
        </tfoot>
    </table>
</div>
