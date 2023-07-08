export default function Post() {
  return (
    <>
      <main className="flex columns-3">
        <aside className="flex w-1/3">
          aside izq donde va la barra de reacciones
        </aside>
        <section className="flex w-1/3">
          <article>
            <header>
              <div>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--eaqnr2Uy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4p46s581l65x91ng6y2w.jpg" />
              </div>
              <div>
                <a>
                  <img
                    src="https://randomuser.me/api/portraits/women/60.jpg"
                    alt="imagen de usuario"
                    className="rounded-full w-full"
                  ></img>
                </a>
              </div>
            </header>
            <div></div>
          </article>
        </section>
        <aside className="flex w-1/3">
          aqui va la card del user que creo el post en teoria
        </aside>
      </main>
    </>
  );
}
