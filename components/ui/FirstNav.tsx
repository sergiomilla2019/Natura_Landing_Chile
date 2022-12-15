import {
  alpha,
  AppBar,
  Box,
  Button,
  Divider,
  Link,
  Menu,
  MenuItem,
  MenuProps,
  styled,
  Toolbar,
} from "@mui/material";
import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const FirstNav = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const [anchorEl4, setAnchorEl4] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const open4 = Boolean(anchorEl4);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClick4 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  return (
    <>
      <Box sx={{ background: "#fafafa", position: "inherit", padding: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            margin: "0 auto",
            width: "100%",
            maxWidth: "75rem",
            justifyContent: "space-between",
            boxShadow: "none !important",
            alignItems: "center",
          }}
        >
          <Box>
            <Button
              sx={{
                background: "transparent",
                color: "#000",
                fontSize: ".75rem",
                "&:hover": { color: "#f4ab34", background: "transparent" },
              }}
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Sobre natura
            </Button>
            <Menu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/la-natura"
                  underline="none"
                  sx={{
                    color: "#b4b4b4",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Sobre Natura
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/la-natura/nuestra-historia"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Nuestra historia
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/nuestras-marcas"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Nuestras Marcas
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/innovacion"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Innovación
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/la-natura/no-testeo-en-animales"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  No Testeo En Animales
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/la-natura/natura-en-la-prensa"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Natura En La Prensa
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/la-natura/trabaja-con-nosotros"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Trabaja con Nosotros
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://paginasnaranjas.com/cl/"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Páginas Naranjas
                </Link>
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/sustentabilidad"
                  underline="none"
                  sx={{
                    color: "#b4b4b4",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  SUSTENTABILIDAD
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/sustentabilidad/causas-y-compromisos"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Causas y Compromisos
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/sustentabilidad/cadena-de-valor"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Cadena de Valor
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/sustentabilidad/certificaciones"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Certificaciones
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/creer-para-ver"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Creer Para Ver
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/blog/sustentabilidad/necesitamos-hablar-de-residuos"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  ¿Dónde reciclar?
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              sx={{
                background: "transparent",
                color: "#000",
                fontSize: ".75rem",
                "&:hover": { color: "#f4ab34", background: "transparent" },
              }}
              id="demo-customized-button"
              aria-controls={open2 ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              disableElevation
              onClick={handleClick2}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Consultoría
            </Button>
            <Menu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
            >
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick2}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/quiero-ser-consultor"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Quiero ser consultor(a)
                </Link>
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick2}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/soy-consultor"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Soy consultor(a)
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button
              sx={{
                background: "transparent",
                color: "#000",
                fontSize: ".75rem",
                "&:hover": { color: "#f4ab34", background: "transparent" },
              }}
              id="demo-customized-button"
              aria-controls={open3 ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open3 ? "true" : undefined}
              disableElevation
              onClick={handleClick3}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Ayuda
            </Button>
            <Menu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl3}
              open={open3}
              onClose={handleClose3}
            >
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick3}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/encuentra-natura"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Encuentra Natura
                </Link>
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick3}
                disableRipple
              >
                <Link
                  href="https://www.natura.cl/ayuda"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Ayuda y Contacto
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box>
            <Link underline="none" href="https://www.natura.cl/c/navidad">
              <Button
                sx={{
                  background: "transparent",
                  color: "#000",
                  fontSize: ".75rem",
                  "&:hover": { color: "#f4ab34", background: "transparent" },
                }}
                id="demo-customized-button"
              >
                Blog
              </Button>
            </Link>
          </Box>
          <Box>
            <Link
              underline="none"
              href="https://latam.natura.digital-catalogue.com/view/natura-cl/np6uozukp85ynwqnfy2kguclwfc1blft9adlj7de?page=1"
            >
              <Button
                sx={{
                  background: "transparent",
                  color: "#000",
                  fontSize: ".75rem",
                  "&:hover": { color: "#f4ab34", background: "transparent" },
                }}
                id="demo-customized-button"
              >
                Revista natura
              </Button>
            </Link>
          </Box>
          <Box>
            <Button
              sx={{
                background: "transparent",
                color: "#000",
                fontSize: ".75rem",
                "&:hover": { color: "#f4ab34", background: "transparent" },
              }}
              id="demo-customized-button"
              aria-controls={open4 ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open4 ? "true" : undefined}
              disableElevation
              onClick={handleClick4}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Quiero vender
            </Button>
            <Menu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl4}
              open={open4}
              onClose={handleClose4}
            >
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick4}
                disableRipple
              >
                <Link
                  href="https://registro.red.natura.cl/registro/"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Por internet
                </Link>
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem
                sx={{
                  "&:hover": { background: "transparent", color: "#f4ab34" },
                }}
                onClick={handleClick4}
                disableRipple
              >
                <Link
                  href="https://registro.natura.com/cl/quiero-ser-consultora/"
                  underline="none"
                  sx={{
                    color: "#3a3a3a",
                    fontSize: ".75rem",
                    "&:hover": { color: "#f4ab34" },
                  }}
                >
                  Por revista
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box>
            <Link
              underline="none"
              href="https://www.natura.cl/la-union-es-nuestra-solucion"
            >
              <Button
                sx={{
                  background: "transparent",
                  color: "#000",
                  fontSize: ".75rem",
                  "&:hover": { color: "#f4ab34", background: "transparent" },
                }}
                id="demo-customized-button"
              >
                Covid-19
              </Button>
            </Link>
          </Box>
          <Box>
            <Link
              underline="none"
              href="https://www.natura.cl/regalos-corporativos"
            >
              <Button
                sx={{
                  background: "transparent",
                  color: "#000",
                  fontSize: ".75rem",
                  "&:hover": { color: "#f4ab34", background: "transparent" },
                }}
                id="demo-customized-button"
              >
                Regalos corporativos
              </Button>
            </Link>
          </Box>
          <Box>
            <Link
              underline="none"
              href="https://tracking.natura.cl/nwtchile/index.html"
            >
              <Button
                sx={{
                  background: "transparent",
                  color: "#000",
                  fontSize: ".75rem",
                  "&:hover": { color: "#f4ab34", background: "transparent" },
                }}
                id="demo-customized-button"
              >
                Consulta estado de pedido
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
