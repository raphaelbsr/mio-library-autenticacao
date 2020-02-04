import React, { useState } from "react";
import {
  CardHeader,
  CardContent,
  TextField,
  Button,
  Grid,
  CircularProgress,
  Box
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import { ErrorMessage } from "~/components/index";
import { LoginCard, Form } from "./styles";
import api from "../services/api-mio-auth";
import PropTypes from "prop-types";

const EsqueciSenha = props => {
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { handleClickLogin } = props;

  const handleCloseDialog = () => {
    setDialogOpen(false);
    handleClickLogin();
  };

  const recuperarSenha = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/passwords", JSON.stringify({ email }), {
        headers: {
          "content-type": "application/json",
          "DC-SISTEMA": process.env.REACT_APP_ID
        }
      });
      const { data } = response;
      const status = {
        status: true,
        msg: data
      };
      setLoading(false);
      setDialogOpen(true);
    } catch (err) {
      const status = {
        status: false,
        error: "Não foi possível realizar a recuperação de senha"
      };
      setError("Não foi possível realizar a recuperação de senha");
      setLoading(false);
    }
  };

  return (
    <Box>
      <LoginCard raised>
        <CardHeader
          title="Recuperação de Senha"
          subheader="Informe o e-mail que você utiliza para acessar no sistema"
        />
        <CardContent>
          <Form onSubmit={recuperarSenha} method="post">
            <Grid
              container
              spacing={0}
              justify="center"
              alignContent="center"
              alignItems="center"
            >
              <Grid xs={12} lg={12} md={12} sm={12} xl={12} item>
                <TextField
                  onChange={e => setEmail(e.target.value)}
                  margin="none"
                  variant="outlined"
                  fullWidth
                  label="E-mail"
                  placeholder="Informe seu e-mail de cadastro"
                />
              </Grid>

              {error && <div>{error}</div>}

              <Grid
                xs={6}
                lg={6}
                md={6}
                sm={6}
                xl={6}
                item
                style={{ paddingTop: 8 }}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {isLoading ? (
                    <CircularProgress size={24} color="secondary" />
                  ) : (
                    "Recuperar Senha"
                  )}
                </Button>
              </Grid>
            </Grid>
          </Form>
        </CardContent>
      </LoginCard>
      <Grid container spacing={0} justify="flex-end">
        <Grid
          xs={4}
          lg={4}
          xl={3}
          md={4}
          sm={6}
          item
          style={{ paddingTop: 10, paddingRight: 22 }}
        >
          <Button
            fullWidth
            variant="text"
            color="primary"
            onClick={handleClickLogin}
          >
            Ir para o Login
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Enviamos um e-mail com as instruções para recuperar sua senha!!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Voltar para o Login
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EsqueciSenha;
