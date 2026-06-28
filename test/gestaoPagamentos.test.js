
import ServicoDePagamento from '../src/gestaoPagamentos.js';
import assert from 'node:assert';

describe('ServicoDePagamento', function () {

        it('deve registrar pagamento com categoria "cara"', function () {
                const servico = new ServicoDePagamento();

                servico.pagar('123', 'Empresa X', 150);

                const ultimo = servico.consultarUltimoPagamento();

                assert.strictEqual(ultimo.categoria, 'cara');
            });

        it('deve registrar pagamento com categoria "padrão"', function () {
                const servico = new ServicoDePagamento();

                servico.pagar('456', 'Empresa Y', 50);

                const ultimo = servico.consultarUltimoPagamento();

                assert.strictEqual(ultimo.categoria, 'padrão');
            });

        it('deve retornar o último pagamento realizado', function () {
                const servico = new ServicoDePagamento();

                servico.pagar('111', 'Empresa A', 10);
                servico.pagar('222', 'Empresa B', 200);

                const ultimo = servico.consultarUltimoPagamento();

                assert.strictEqual(ultimo.codigoBarras, '222');
            });

        it('deve retornar null se não houver pagamentos', function () {
                const servico = new ServicoDePagamento();

                const ultimo = servico.consultarUltimoPagamento();

                assert.strictEqual(ultimo, null);
            });

    });
