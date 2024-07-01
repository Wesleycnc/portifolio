// Espera até que o documento HTML seja completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links dentro das listas de navegação do menu
    const links = document.querySelectorAll('nav ul li a');
  
    // Itera sobre cada link encontrado
    links.forEach(link => {
      // Adiciona um ouvinte de evento de clique a cada link
      link.addEventListener("click", function(event) {
        // Previne o comportamento padrão do link (navegar para outra página)
        event.preventDefault();
  
        // Obtém o ID da seção de destino a partir do atributo href do link
        const targetId = this.getAttribute("href").substring(1);
  
        // Encontra o elemento da seção de destino com base no ID obtido
        const targetSection = document.getElementById(targetId);
  
        // Verifica se a seção de destino foi encontrada
        if (targetSection) {
          // Obtém a posição vertical da seção de destino em relação ao topo da página
          const offsetTop = targetSection.offsetTop;
  
          // Realiza a rolagem suave até a posição da seção de destino
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth" // Define o comportamento de rolagem suave
          });
        }
      });
    });
  });
  