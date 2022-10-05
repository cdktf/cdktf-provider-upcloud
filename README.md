
# Terraform CDK upcloud Provider ~> 2.4

This repo builds and publishes the Terraform upcloud Provider bindings for [CDK for Terraform](https://cdk.tf).

## Available Packages

### NPM

The npm package is available at [https://www.npmjs.com/package/@cdktf/provider-upcloud](https://www.npmjs.com/package/@cdktf/provider-upcloud).

`npm install @cdktf/provider-upcloud`

### PyPI

The PyPI package is available at [https://pypi.org/project/cdktf-cdktf-provider-upcloud](https://pypi.org/project/cdktf-cdktf-provider-upcloud).

`pipenv install cdktf-cdktf-provider-upcloud`

### Nuget

The Nuget package is available at [https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Upcloud](https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Upcloud).

`dotnet add package HashiCorp.Cdktf.Providers.Upcloud`

### Maven

The Maven package is available at [https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-upcloud](https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-upcloud).

```
<dependency>
    <groupId>com.hashicorp</groupId>
    <artifactId>cdktf-provider-upcloud</artifactId>
    <version>[REPLACE WITH DESIRED VERSION]</version>
</dependency>
```


### Go

The go package is generated into the [`github.com/cdktf/cdktf-provider-upcloud-go`](https://github.com/cdktf/cdktf-provider-upcloud-go) package.

`go get github.com/cdktf/cdktf-provider-upcloud-go/upcloud`

## Docs

Find auto-generated docs for this provider here: [./API.md](./API.md)
You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktf/provider-upcloud).

## Versioning

This project is explicitly not tracking the Terraform upcloud Provider version 1:1. In fact, it always tracks `latest` of `~> 2.4` with every release. If there are scenarios where you explicitly have to pin your provider version, you can do so by generating the [provider constructs manually](https://cdk.tf/imports).

These are the upstream dependencies:

- [Terraform CDK](https://cdk.tf)
- [Terraform upcloud Provider](https://github.com/terraform-providers/terraform-provider-upcloud)
- [Terraform Engine](https://terraform.io)

If there are breaking changes (backward incompatible) in any of the above, the major version of this project will be bumped.

## Features / Issues / Bugs

Please report bugs and issues to the [terraform cdk](https://cdk.tf) project:

- [Create bug report](https://cdk.tf/bug)
- [Create feature request](https://cdk.tf/feature)

## Contributing

### projen

This is mostly based on [projen](https://github.com/eladb/projen), which takes care of generating the entire repository.

### cdktf-provider-project based on projen

There's a custom [project builder](https://github.com/hashicorp/cdktf-provider-project) which encapsulate the common settings for all `cdktf` providers.

### Provider Version

The provider version can be adjusted in [./.projenrc.js](./.projenrc.js).

### Repository Management

The repository is managed by [Repository Manager](https://github.com/hashicorp/cdktf-repository-manager/)
