import React from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Login = (props: LoginProps) => {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "20px auto",
  };

  const avatarStyle = {
    backgroundColor: "#05b0a7",
    margin: "20px auto",
  };

  const btnStyle = {
    margin: "8px 0",
  };

  const typographyStyle = {
    margin: "0 90px",
  };

  if (props.isLoginVisible) {
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid alignItems="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography style={typographyStyle}>
              <h2>Ingresar</h2>
            </Typography>
          </Grid>
          <TextField
            id="username"
            label="Nombre de usuario"
            placeholder="Ingrese su usuario"
            fullWidth
            required
          />
          <TextField
            id="password"
            label="Contraseña"
            placeholder="Ingrese su contraseña"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={
              <Checkbox id="rememberMe" name="rememberMe" color="primary" />
            }
            label="Recuérdame"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={btnStyle}
            fullWidth
          >
            Ingresar
          </Button>
          <Typography>
            <Link href="#">Olvidé mi contraseña</Link>
          </Typography>
          <Typography>
            Aún no tienes cuenta?
            <Link href="#"> Regístrate!</Link>
          </Typography>
        </Paper>
      </Grid>
    );
  } else return <div></div>;
};

type LoginProps = {
  isLoginVisible: boolean;
};

export default Login;
