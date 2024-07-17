# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-upcloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UpcloudProvider <a name="UpcloudProvider" id="@cdktf/provider-upcloud.provider.UpcloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.8.0/docs upcloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-upcloud'

new provider.UpcloudProvider(scope: Construct, id: string, config?: UpcloudProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig">UpcloudProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig">UpcloudProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRequestTimeoutSec">resetRequestTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryMax">resetRetryMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMaxSec">resetRetryWaitMaxSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMinSec">resetRetryWaitMinSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRequestTimeoutSec` <a name="resetRequestTimeoutSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRequestTimeoutSec"></a>

```typescript
public resetRequestTimeoutSec(): void
```

##### `resetRetryMax` <a name="resetRetryMax" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryMax"></a>

```typescript
public resetRetryMax(): void
```

##### `resetRetryWaitMaxSec` <a name="resetRetryWaitMaxSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMaxSec"></a>

```typescript
public resetRetryWaitMaxSec(): void
```

##### `resetRetryWaitMinSec` <a name="resetRetryWaitMinSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMinSec"></a>

```typescript
public resetRetryWaitMinSec(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UpcloudProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-upcloud'

provider.UpcloudProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-upcloud'

provider.UpcloudProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-upcloud'

provider.UpcloudProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-upcloud'

provider.UpcloudProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a UpcloudProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UpcloudProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UpcloudProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.8.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UpcloudProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.requestTimeoutSecInput">requestTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMaxInput">retryMaxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSecInput">retryWaitMaxSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSecInput">retryWaitMinSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.requestTimeoutSec">requestTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMax">retryMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSec">retryWaitMaxSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSec">retryWaitMinSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `requestTimeoutSecInput`<sup>Optional</sup> <a name="requestTimeoutSecInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.requestTimeoutSecInput"></a>

```typescript
public readonly requestTimeoutSecInput: number;
```

- *Type:* number

---

##### `retryMaxInput`<sup>Optional</sup> <a name="retryMaxInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMaxInput"></a>

```typescript
public readonly retryMaxInput: number;
```

- *Type:* number

---

##### `retryWaitMaxSecInput`<sup>Optional</sup> <a name="retryWaitMaxSecInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSecInput"></a>

```typescript
public readonly retryWaitMaxSecInput: number;
```

- *Type:* number

---

##### `retryWaitMinSecInput`<sup>Optional</sup> <a name="retryWaitMinSecInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSecInput"></a>

```typescript
public readonly retryWaitMinSecInput: number;
```

- *Type:* number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `requestTimeoutSec`<sup>Optional</sup> <a name="requestTimeoutSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.requestTimeoutSec"></a>

```typescript
public readonly requestTimeoutSec: number;
```

- *Type:* number

---

##### `retryMax`<sup>Optional</sup> <a name="retryMax" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMax"></a>

```typescript
public readonly retryMax: number;
```

- *Type:* number

---

##### `retryWaitMaxSec`<sup>Optional</sup> <a name="retryWaitMaxSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSec"></a>

```typescript
public readonly retryWaitMaxSec: number;
```

- *Type:* number

---

##### `retryWaitMinSec`<sup>Optional</sup> <a name="retryWaitMinSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSec"></a>

```typescript
public readonly retryWaitMinSec: number;
```

- *Type:* number

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UpcloudProviderConfig <a name="UpcloudProviderConfig" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-upcloud'

const upcloudProviderConfig: provider.UpcloudProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.password">password</a></code> | <code>string</code> | Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.requestTimeoutSec">requestTimeoutSec</a></code> | <code>number</code> | The duration (in seconds) that the provider waits for an HTTP request towards UpCloud API to complete. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryMax">retryMax</a></code> | <code>number</code> | Maximum number of retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMaxSec">retryWaitMaxSec</a></code> | <code>number</code> | Maximum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMinSec">retryWaitMinSec</a></code> | <code>number</code> | Minimum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.username">username</a></code> | <code>string</code> | UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.8.0/docs#alias UpcloudProvider#alias}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.8.0/docs#password UpcloudProvider#password}

---

##### `requestTimeoutSec`<sup>Optional</sup> <a name="requestTimeoutSec" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.requestTimeoutSec"></a>

```typescript
public readonly requestTimeoutSec: number;
```

- *Type:* number

The duration (in seconds) that the provider waits for an HTTP request towards UpCloud API to complete.

Defaults to 120 seconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.8.0/docs#request_timeout_sec UpcloudProvider#request_timeout_sec}

---

##### `retryMax`<sup>Optional</sup> <a name="retryMax" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryMax"></a>

```typescript
public readonly retryMax: number;
```

- *Type:* number

Maximum number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.8.0/docs#retry_max UpcloudProvider#retry_max}

---

##### `retryWaitMaxSec`<sup>Optional</sup> <a name="retryWaitMaxSec" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMaxSec"></a>

```typescript
public readonly retryWaitMaxSec: number;
```

- *Type:* number

Maximum time to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.8.0/docs#retry_wait_max_sec UpcloudProvider#retry_wait_max_sec}

---

##### `retryWaitMinSec`<sup>Optional</sup> <a name="retryWaitMinSec" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMinSec"></a>

```typescript
public readonly retryWaitMinSec: number;
```

- *Type:* number

Minimum time to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.8.0/docs#retry_wait_min_sec UpcloudProvider#retry_wait_min_sec}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.8.0/docs#username UpcloudProvider#username}

---



