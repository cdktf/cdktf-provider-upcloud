# `upcloud_loadbalancer_frontend`

Refer to the Terraform Registory for docs: [`upcloud_loadbalancer_frontend`](https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend).

# `loadbalancerFrontend` Submodule <a name="`loadbalancerFrontend` Submodule" id="@cdktf/provider-upcloud.loadbalancerFrontend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerFrontend <a name="LoadbalancerFrontend" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend upcloud_loadbalancer_frontend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer"></a>

```typescript
import { loadbalancerFrontend } from '@cdktf/provider-upcloud'

new loadbalancerFrontend.LoadbalancerFrontend(scope: Construct, id: string, config: LoadbalancerFrontendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig">LoadbalancerFrontendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig">LoadbalancerFrontendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetNetworks">resetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks"></a>

```typescript
public putNetworks(value: IResolvable | LoadbalancerFrontendNetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>[]

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties"></a>

```typescript
public putProperties(value: LoadbalancerFrontendProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetNetworks"></a>

```typescript
public resetNetworks(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetProperties"></a>

```typescript
public resetProperties(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct"></a>

```typescript
import { loadbalancerFrontend } from '@cdktf/provider-upcloud'

loadbalancerFrontend.LoadbalancerFrontend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement"></a>

```typescript
import { loadbalancerFrontend } from '@cdktf/provider-upcloud'

loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource"></a>

```typescript
import { loadbalancerFrontend } from '@cdktf/provider-upcloud'

loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList">LoadbalancerFrontendNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference">LoadbalancerFrontendPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.rules">rules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tlsConfigs">tlsConfigs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendNameInput">defaultBackendNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancerInput">loadbalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networksInput">networksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendName">defaultBackendName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancer">loadbalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.port">port</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networks"></a>

```typescript
public readonly networks: LoadbalancerFrontendNetworksList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList">LoadbalancerFrontendNetworksList</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.properties"></a>

```typescript
public readonly properties: LoadbalancerFrontendPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference">LoadbalancerFrontendPropertiesOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.rules"></a>

```typescript
public readonly rules: string[];
```

- *Type:* string[]

---

##### `tlsConfigs`<sup>Required</sup> <a name="tlsConfigs" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tlsConfigs"></a>

```typescript
public readonly tlsConfigs: string[];
```

- *Type:* string[]

---

##### `defaultBackendNameInput`<sup>Optional</sup> <a name="defaultBackendNameInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendNameInput"></a>

```typescript
public readonly defaultBackendNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadbalancerInput`<sup>Optional</sup> <a name="loadbalancerInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancerInput"></a>

```typescript
public readonly loadbalancerInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networksInput"></a>

```typescript
public readonly networksInput: IResolvable | LoadbalancerFrontendNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>[]

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: LoadbalancerFrontendProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---

##### `defaultBackendName`<sup>Required</sup> <a name="defaultBackendName" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendName"></a>

```typescript
public readonly defaultBackendName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancer"></a>

```typescript
public readonly loadbalancer: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerFrontendConfig <a name="LoadbalancerFrontendConfig" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.Initializer"></a>

```typescript
import { loadbalancerFrontend } from '@cdktf/provider-upcloud'

const loadbalancerFrontendConfig: loadbalancerFrontend.LoadbalancerFrontendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.defaultBackendName">defaultBackendName</a></code> | <code>string</code> | The name of the default backend where traffic will be routed. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.loadbalancer">loadbalancer</a></code> | <code>string</code> | ID of the load balancer to which the frontend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.mode">mode</a></code> | <code>string</code> | When load balancer operating in `tcp` mode it acts as a layer 4 proxy. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.name">name</a></code> | <code>string</code> | The name of the frontend must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.port">port</a></code> | <code>number</code> | Port to listen incoming requests. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.networks">networks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>[]</code> | networks block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultBackendName`<sup>Required</sup> <a name="defaultBackendName" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.defaultBackendName"></a>

```typescript
public readonly defaultBackendName: string;
```

- *Type:* string

The name of the default backend where traffic will be routed.

Note, default backend can be overwritten in frontend rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend#default_backend_name LoadbalancerFrontend#default_backend_name}

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.loadbalancer"></a>

```typescript
public readonly loadbalancer: string;
```

- *Type:* string

ID of the load balancer to which the frontend is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend#loadbalancer LoadbalancerFrontend#loadbalancer}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

When load balancer operating in `tcp` mode it acts as a layer 4 proxy.

In `http` mode it acts as a layer 7 proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend#mode LoadbalancerFrontend#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the frontend must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port to listen incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend#port LoadbalancerFrontend#port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.networks"></a>

```typescript
public readonly networks: IResolvable | LoadbalancerFrontendNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>[]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend#networks LoadbalancerFrontend#networks}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.properties"></a>

```typescript
public readonly properties: LoadbalancerFrontendProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend#properties LoadbalancerFrontend#properties}

---

### LoadbalancerFrontendNetworks <a name="LoadbalancerFrontendNetworks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.Initializer"></a>

```typescript
import { loadbalancerFrontend } from '@cdktf/provider-upcloud'

const loadbalancerFrontendNetworks: loadbalancerFrontend.LoadbalancerFrontendNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.property.name">name</a></code> | <code>string</code> | Name of the load balancer network. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the load balancer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}

---

### LoadbalancerFrontendProperties <a name="LoadbalancerFrontendProperties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.Initializer"></a>

```typescript
import { loadbalancerFrontend } from '@cdktf/provider-upcloud'

const loadbalancerFrontendProperties: loadbalancerFrontend.LoadbalancerFrontendProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.inboundProxyProtocol">inboundProxyProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable inbound proxy protocol support. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.timeoutClient">timeoutClient</a></code> | <code>number</code> | Client request timeout in seconds. |

---

##### `inboundProxyProtocol`<sup>Optional</sup> <a name="inboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.inboundProxyProtocol"></a>

```typescript
public readonly inboundProxyProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable inbound proxy protocol support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend#inbound_proxy_protocol LoadbalancerFrontend#inbound_proxy_protocol}

---

##### `timeoutClient`<sup>Optional</sup> <a name="timeoutClient" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.timeoutClient"></a>

```typescript
public readonly timeoutClient: number;
```

- *Type:* number

Client request timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/loadbalancer_frontend#timeout_client LoadbalancerFrontend#timeout_client}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerFrontendNetworksList <a name="LoadbalancerFrontendNetworksList" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer"></a>

```typescript
import { loadbalancerFrontend } from '@cdktf/provider-upcloud'

new loadbalancerFrontend.LoadbalancerFrontendNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>[]

---


### LoadbalancerFrontendNetworksOutputReference <a name="LoadbalancerFrontendNetworksOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontend } from '@cdktf/provider-upcloud'

new loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendNetworks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks">LoadbalancerFrontendNetworks</a>

---


### LoadbalancerFrontendPropertiesOutputReference <a name="LoadbalancerFrontendPropertiesOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontend } from '@cdktf/provider-upcloud'

new loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetInboundProxyProtocol">resetInboundProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetTimeoutClient">resetTimeoutClient</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInboundProxyProtocol` <a name="resetInboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetInboundProxyProtocol"></a>

```typescript
public resetInboundProxyProtocol(): void
```

##### `resetTimeoutClient` <a name="resetTimeoutClient" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetTimeoutClient"></a>

```typescript
public resetTimeoutClient(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocolInput">inboundProxyProtocolInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClientInput">timeoutClientInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocol">inboundProxyProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClient">timeoutClient</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inboundProxyProtocolInput`<sup>Optional</sup> <a name="inboundProxyProtocolInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocolInput"></a>

```typescript
public readonly inboundProxyProtocolInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutClientInput`<sup>Optional</sup> <a name="timeoutClientInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClientInput"></a>

```typescript
public readonly timeoutClientInput: number;
```

- *Type:* number

---

##### `inboundProxyProtocol`<sup>Required</sup> <a name="inboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocol"></a>

```typescript
public readonly inboundProxyProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutClient`<sup>Required</sup> <a name="timeoutClient" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClient"></a>

```typescript
public readonly timeoutClient: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoadbalancerFrontendProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---



