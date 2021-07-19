package br.muriloaippe.servicos;

import br.muriloaippe.entidades.Filme;
import br.muriloaippe.entidades.NotaAluguel;
import br.muriloaippe.entidades.TipoAluguel;
import br.muriloaippe.utils.DateUtils;

public class AluguelService {

	public NotaAluguel alugar(Filme filme, TipoAluguel tipo) {

		if (filme.getEstoque() == 0)
			throw new RuntimeException("Filme sem estoque");

		NotaAluguel nota = new NotaAluguel();
		switch (tipo) {
		case COMUM:
			nota.setPreco(filme.getAluguel());
			nota.setDataEntrega(DateUtils.obterDataDiferencaDias(1));
			nota.setPontuacao(1);
			break;
		case EXTENDIDA:
			System.out.println("Caiu na extendida");
			nota.setPreco(filme.getAluguel() * 2);
			nota.setDataEntrega(DateUtils.obterDataDiferencaDias(3));
			nota.setPontuacao(2);
			break;
		case SEMANAL:
			System.out.println("Caiu na semanal");
			nota.setPreco(filme.getAluguel() * 3);
			nota.setDataEntrega(DateUtils.obterDataDiferencaDias(7));
			nota.setPontuacao(3);
		}

		filme.setEstoque(filme.getEstoque() - 1);
		return nota;

	}

}
