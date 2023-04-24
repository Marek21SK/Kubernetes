Používam Docker, v ktorom mám spustený Kubernetes

Minikube - lokálny klaster, Docker na image a cez Docker mám spustený aj Kubernetes (WSL2 v PC) Windows 11 

Samotné nodes mám v Docker kontajneroch.  "minikube start" a "minikube stop" si zapínam a vypínam lokálny klaster v príkazovom riadku, tak vykonávam aj ďalšie "kubectl, docker" a pod. príkazy

Konfiguračné súbory a aplikáciu som vytváral vo VS Code

V priečinku "/public" mám vlastne tú Javascript aplikáciu + HTML kód (to som mal spraviť niečo proste základné, ja sa mám primárne zamerať na YAML súbory, tak mi školiteľ povedal)

my-app.yaml = moja aplikácia

mysql.yaml = databáza 

Ostatné YAML súbory to som už len niečo skúšal, ale "test-resources.yaml" mi funguje

ClusterIssuer je asi tiež funkčný podľa kubectl describe" a "kubectl log"

/k8s_test/mysql-test.yaml = to som sa snažil trošku pre mňa zložitejšiu konfiguráciu rozbehať, ale nepodarilo sa mi to nefunguje PVC a PV

Samotný Ingress mám nainštalovaný ale neiplementoval som to nejako, lebo neviem ako, taktiež Helm by som mal mať nainštalovaný v Minikube a Cert-Manager (snažil som sa spraviť certifikáciu - neúspešne)

Teraz musím spraviť ten Helm. Nahodiť cez Helm moju aplikáciu + databázu
