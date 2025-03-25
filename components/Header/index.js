import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Menú para pantallas pequeñas (Popover) */}
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                      alt="theme toggle"
                    />
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="menu"
                  />
                </Popover.Button>
              </div>
            </div>

            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  <Button
                    onClick={() =>
                      window.open("mailto:cucarachatraicionera@gmail.com")
                    }
                  >
                    Contacto
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Inicio
                  </Button>
                  <Button
                    onClick={() =>
                      window.open("mailto:cucarachatraicionera@gmail.com")
                    }
                  >
                    Contacto
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* Menú para pantallas grandes */}
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>

        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Servicios</Button>
            <Button onClick={handleAboutScroll}>Nosotros</Button>
            <Button
              onClick={() =>
                window.open("mailto:cucarachatraicionera@gmail.com")
              }
            >
              Contacto
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${
                    theme === "dark" ? "moon.svg" : "sun.svg"
                  }`}
                  alt="theme toggle"
                />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Inicio</Button>
            <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
              Contacto
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${
                    theme === "dark" ? "moon.svg" : "sun.svg"
                  }`}
                  alt="theme toggle"
                />
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Botón flotante de WhatsApp con tamaño mayor y efecto "pulse" */}
      <a
        href="https://wa.me/5491123456789?text=¡Hola!%20Quiero%20más%20información."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <img
          src="https://img.icons8.com/color/96/null/whatsapp--v1.png"
          alt="WhatsApp"
          // Hazlo más grande y con animación
          className="h-16 w-16 animate-pulse"
        />
      </a>

      {/* 
        Estilos globales para ocultar el botón "Edit data".
        Suponiendo que tenga aria-label="Edit data".
        Ajusta si el botón usa un ID/clase distintos. 
      */}
      
    </>
  );
};

export default Header;
