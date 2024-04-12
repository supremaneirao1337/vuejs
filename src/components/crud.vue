<style>
.borda {
  border: 1px solid gainsboro;
  border-radius: 20px;
}

.margintop15 {
  margin-top: 15px !important;
}
</style>
<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center py-4">
          <h1>Exemplo de CRUD</h1>
          <p><em>Simulação de atualização de cadastro.</em></p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 py-4 borda">
          <form>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">@</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="usuario"
                placeholder="Usuário"
                v-model="usuario"
                aria-label="Usuário"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="form-group margintop15">
              <label for="senha">Senha</label>
              <input
                type="password"
                class="form-control"
                v-model="senha"
                id="senha"
                placeholder="Senha"
              />
            </div>
            <div class="form-group margintop15">
              <label for="senha">Data de Nascimento</label>
              <input
                type="date"
                class="form-control"
                v-model="dataNascimento"
                id="dataNascimento"
              />
            </div>
            <div class="form-group margintop15">
              <label for="senha">Telefone</label>
              <input
                type="text"
                class="form-control"
                v-model="dataNascimento"
                id="dataNascimento"
                placeholder="Número de Telefone"
              />
            </div>

            <label class="margintop15" for="basic-url">URL do Seu Perfil</label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="input-group-text text-start w-100"
                id="basic-url"
                aria-describedby="basic-addon3"
                disabled="true"
                value=""
              />
            </div>
            <button
              type="submit"
              class="margintop15 btn btn-primary"
              :disabled="isActiveBtn"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, reactive } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

let botaoDesativado = ref(true);

function isActiveBtn() {
  return botaoDesativado;
}

const _toast = (texto, tipo) => {
  toast(texto, {
    theme: "auto",
    type: tipo,
    dangerouslyHTMLString: true,
  });
};
</script>
