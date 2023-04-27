# `upcloud_loadbalancer_dynamic_backend_member`

Refer to the Terraform Registory for docs: [`upcloud_loadbalancer_dynamic_backend_member`](https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_dynamic_backend_member).

# `loadbalancerDynamicBackendMember` Submodule <a name="`loadbalancerDynamicBackendMember` Submodule" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerDynamicBackendMember <a name="LoadbalancerDynamicBackendMember" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_dynamic_backend_member upcloud_loadbalancer_dynamic_backend_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer"></a>

```typescript
import { loadbalancerDynamicBackendMember } from '@cdktf/provider-upcloud'

new loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember(scope: Construct, id: string, config: LoadbalancerDynamicBackendMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig">LoadbalancerDynamicBackendMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig">LoadbalancerDynamicBackendMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetPort">resetPort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetIp"></a>

```typescript
public resetIp(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.resetPort"></a>

```typescript
public resetPort(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isConstruct"></a>

```typescript
import { loadbalancerDynamicBackendMember } from '@cdktf/provider-upcloud'

loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformElement"></a>

```typescript
import { loadbalancerDynamicBackendMember } from '@cdktf/provider-upcloud'

loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformResource"></a>

```typescript
import { loadbalancerDynamicBackendMember } from '@cdktf/provider-upcloud'

loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.maxSessionsInput">maxSessionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.maxSessions">maxSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.weight">weight</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `maxSessionsInput`<sup>Optional</sup> <a name="maxSessionsInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.maxSessionsInput"></a>

```typescript
public readonly maxSessionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `maxSessions`<sup>Required</sup> <a name="maxSessions" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.maxSessions"></a>

```typescript
public readonly maxSessions: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerDynamicBackendMemberConfig <a name="LoadbalancerDynamicBackendMemberConfig" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.Initializer"></a>

```typescript
import { loadbalancerDynamicBackendMember } from '@cdktf/provider-upcloud'

const loadbalancerDynamicBackendMemberConfig: loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.backend">backend</a></code> | <code>string</code> | ID of the load balancer backend to which the member is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.maxSessions">maxSessions</a></code> | <code>number</code> | Maximum number of sessions before queueing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.name">name</a></code> | <code>string</code> | The name of the member must be unique within the load balancer backend service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.weight">weight</a></code> | <code>number</code> | Used to adjust the server's weight relative to other servers. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the member is enabled. Disabled members are excluded from load balancing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_dynamic_backend_member#id LoadbalancerDynamicBackendMember#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.ip">ip</a></code> | <code>string</code> | Optional fallback IP address in case of failure on DNS resolving. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.port">port</a></code> | <code>number</code> | Server port. Port is optional and can be specified in DNS SRV record. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

ID of the load balancer backend to which the member is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_dynamic_backend_member#backend LoadbalancerDynamicBackendMember#backend}

---

##### `maxSessions`<sup>Required</sup> <a name="maxSessions" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.maxSessions"></a>

```typescript
public readonly maxSessions: number;
```

- *Type:* number

Maximum number of sessions before queueing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_dynamic_backend_member#max_sessions LoadbalancerDynamicBackendMember#max_sessions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the member must be unique within the load balancer backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_dynamic_backend_member#name LoadbalancerDynamicBackendMember#name}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Used to adjust the server's weight relative to other servers.

All servers will receive a load proportional to their weight relative to the sum of all weights, so the higher the weight, the higher the load. 
A value of 0 means the server will not participate in load balancing but will still accept persistent connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_dynamic_backend_member#weight LoadbalancerDynamicBackendMember#weight}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the member is enabled. Disabled members are excluded from load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_dynamic_backend_member#enabled LoadbalancerDynamicBackendMember#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_dynamic_backend_member#id LoadbalancerDynamicBackendMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

Optional fallback IP address in case of failure on DNS resolving.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_dynamic_backend_member#ip LoadbalancerDynamicBackendMember#ip}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.loadbalancerDynamicBackendMember.LoadbalancerDynamicBackendMemberConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Server port. Port is optional and can be specified in DNS SRV record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.10.0/docs/resources/loadbalancer_dynamic_backend_member#port LoadbalancerDynamicBackendMember#port}

---



